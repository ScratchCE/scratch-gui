import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ]
                },
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [],
                volume: 100
            },
            {
                isStage: false,
                name: "Communicat",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                comments: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: "b551df3ba49e6475928309214f51bd94",
                        name: "Communicat-a",
                        bitmapResolution: 1,
                        md5ext: "b551df3ba49e6475928309214f51bd94.svg",
                        dataFormat: "svg",
                        rotationCenterX: 48.20865451049096,
                        rotationCenterY: 49.61842375318162
                    },
                    {
                        assetId: "b62c61a6c0384f71872990115d93eea8",
                        name: "Communicat-b",
                        bitmapResolution: 1,
                        md5ext: "b62c61a6c0384f71872990115d93eea8.svg",
                        dataFormat: "svg",
                        rotationCenterX: 46.1326061009419,
                        rotationCenterY: 52.471372930065456
                    },
                    {
                        assetId: "814a2e4591c4eab9e832b88d16d3988d",
                        name: "Communicat-c",
                        bitmapResolution: 1,
                        md5ext: "814a2e4591c4eab9e832b88d16d3988d.svg",
                        dataFormat: "svg",
                        rotationCenterX: 55.23697676581517,
                        rotationCenterY: 29.391930273437737
                    },
                    {
                        assetId: "78ed5bb0fefd8984546468e1a1ebb1b6",
                        name: "Communicat-d",
                        bitmapResolution: 1,
                        md5ext: "78ed5bb0fefd8984546468e1a1ebb1b6.svg",
                        dataFormat: "svg",
                        rotationCenterX: 48.44891835577772,
                        rotationCenterY: 41.586213103483544
                    }
                ],
                sounds: [
                    {
                        assetId: "83c36d806dc92327b9e7049a565c6bff",
                        name: "Meow",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 40681,
                        md5ext: "83c36d806dc92327b9e7049a565c6bff.wav"
                    }
                ],
                volume: 100,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: ''
        }
    });
};


export default projectData;
