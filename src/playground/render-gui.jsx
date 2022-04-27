import React from 'react';
import GUI from '../containers/gui.jsx';

const searchParams = new URLSearchParams(location.search);

const scratchAssets = 'https://assets.scratch.mit.edu';
const scratchProjects = 'https://projects.scratch.mit.edu';

const cloudHost = searchParams.get('cloud_host') || 'wss://clouddata.turbowarp.org';
const assetHost = searchParams.get('asset_host') || scratchAssets;
const projectHost = searchParams.get('project_host') || scratchProjects;

const RenderGUI = props => (
    <GUI
        cloudHost={cloudHost}
        canSave={projectHost !== scratchProjects}
        basePath={process.env.ROOT}
        canEditTitle
        enableCommunity
		assetHost={assetHost}
		projectHost={projectHost}
        {...props}
    />
);

export default RenderGUI;
