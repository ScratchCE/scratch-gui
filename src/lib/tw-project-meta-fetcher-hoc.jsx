import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import log from './log';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import {setProjectTitle} from '../reducers/project-title';
import {setAuthor, setDescription} from '../reducers/tw';

const API_URL = 'https://trampoline.turbowarp.org/proxy/projects/$id';

const messages = defineMessages({
    defaultProjectTitleWithId: {
        id: 'sce.gui.defaultProjectTitleWithId',
        description: 'Default title for project, showing the ID',
        defaultMessage: 'Project ID {id}'
    }
});

// Eventually I'll make it fetch from the servers too.
// For now, pretend it's always unshared and never actually fetch anything
const fetchProjectMeta = async projectId => {throw ""};
/*
fetch(API_URL.replace('$id', projectId))
	.then(r => {
		if (r.status === 404) {
			throw new Error('Probably unshared (API returned 404)');
		}
		if (r.status !== 200) {
			throw new Error(`Unexpected status code: ${r.status}`);
		}
		return r.json();
	})
*/

const getNoIndexTag = () => document.querySelector('meta[name="robots"][content="noindex"]');
const setIndexable = indexable => {
    if (indexable) {
        const tag = getNoIndexTag();
        if (tag) {
            tag.remove();
        }
    } else if (!getNoIndexTag()) {
        const tag = document.createElement('meta');
        tag.name = 'robots';
        tag.content = 'noindex';
        document.head.appendChild(tag);
    }
};

const TWProjectMetaFetcherHOC = function (WrappedComponent) {
    class ProjectMetaFetcherComponent extends React.Component {
        shouldComponentUpdate (nextProps) {
            return this.props.projectId !== nextProps.projectId;
        }
        componentDidUpdate () {
            const projectId = this.props.projectId;
			this.props.onSetProjectTitle(
				this.props.intl.formatMessage(messages.defaultProjectTitleWithId, {
					id: projectId.toString()
				})
			);
            this.props.onSetAuthor('', '');
            this.props.onSetDescription('', '');
            // Don't try to load metadata for empty projects.
            if (projectId === '0') {
                return;
            }
            fetchProjectMeta(projectId)
                .then(data => {
                    // If project ID changed, ignore the results.
                    if (this.props.projectId !== projectId) {
                        return;
                    }
                    const title = data.title;
                    if (title) {
                        this.props.onSetProjectTitle(title);
                    }
                    const authorName = data.author.username;
                    const authorThumbnail = data.author.profile.images['32x32'];
                    if (authorName && authorThumbnail) {
                        this.props.onSetAuthor(authorName, authorThumbnail);
                    }
                    const instructions = data.instructions || '';
                    const credits = data.description || '';
                    if (instructions || credits) {
                        this.props.onSetDescription(instructions, credits);
                    }
                    setIndexable(true);
                })
                .catch(err => {
                    setIndexable(false);
                    if (`${err}`.includes('unshared')) {
                        this.props.onSetDescription('unshared', 'unshared');
                    }
                    log.warn('cannot fetch project meta', err);
                });
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
				intl,
                projectId,
                onSetAuthor,
                onSetDescription,
                onSetProjectTitle,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return (
                <WrappedComponent
                    {...props}
                />
            );
        }
    }
    ProjectMetaFetcherComponent.propTypes = {
		intl: intlShape,
        projectId: PropTypes.string,
        onSetAuthor: PropTypes.func,
        onSetDescription: PropTypes.func,
        onSetProjectTitle: PropTypes.func
    };
    const mapStateToProps = state => ({
        projectId: state.scratchGui.projectState.projectId
    });
    const mapDispatchToProps = dispatch => ({
        onSetAuthor: (username, thumbnail) => dispatch(setAuthor({
            username,
            thumbnail
        })),
        onSetDescription: (instructions, credits) => dispatch(setDescription({
            instructions,
            credits
        })),
        onSetProjectTitle: title => dispatch(setProjectTitle(title))
    });
    return injectIntl(connect(
        mapStateToProps,
        mapDispatchToProps
    )(ProjectMetaFetcherComponent));
};

export {
    TWProjectMetaFetcherHOC as default
};
