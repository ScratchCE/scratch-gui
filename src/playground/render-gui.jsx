import React from 'react';
import GUI from '../containers/gui.jsx';

const searchParams = new URLSearchParams(location.search);
const cloudHost = searchParams.get('cloud_host') || 'wss://clouddata.turbowarp.org';

const assetHost = window.gui_assetHost || "http://localhost:8080/assets";
const projectHost = window.gui_projectHost || "http://localhost:8080/projects";

const RenderGUI = props => (
    <GUI
        cloudHost={cloudHost}
        canSave={true}
        basePath={process.env.ROOT}
        canEditTitle
        enableCommunity
		assetHost={assetHost}
		projectHost={projectHost}
        {...props}
    />
);

export default RenderGUI;
