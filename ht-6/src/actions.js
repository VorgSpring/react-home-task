import {createActions} from 'redux-actions';

const {search, shows} = createActions(
    {
        SEARCH: {
            REQUEST: undefined,
            SUCCESS: [films => films, (_, length) => ({length})],
            FAILURE: undefined,
        }, 
        SHOWS: {
            REQUEST: undefined,
            SUCCESS: [film => film, (_, length) => ({length})],
            FAILURE: undefined,
        }, 
    },
    { 
        namespace: '_' 
    }
);


export {search, shows};