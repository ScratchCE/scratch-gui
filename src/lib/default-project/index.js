import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import cata from '!raw-loader!./communicat-a.svg';
import catb from '!raw-loader!./communicat-b.svg';
import catc from '!raw-loader!./communicat-c.svg';
import catd from '!raw-loader!./communicat-d.svg';
import meow from '!raw-loader!./meow.wav';
/* eslint-enable import/no-unresolved */
import {TextEncoder} from '../tw-text-encoder';

const defaultProject = translator => {
    const encoder = new TextEncoder();

    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: 'b551df3ba49e6475928309214f51bd94',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(cata)
    }, {
        id: 'b62c61a6c0384f71872990115d93eea8',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(catb)
    }, {
        id: '814a2e4591c4eab9e832b88d16d3988d',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(catc)
    }, {
        id: '78ed5bb0fefd8984546468e1a1ebb1b6',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(catd)
    }];
};

export default defaultProject;
