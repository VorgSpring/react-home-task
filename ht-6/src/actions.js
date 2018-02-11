import {createActions} from 'redux-actions';

const {search, shows} = createActions(
    {
        SEARCH: {
            REQUEST: undefined,
            SUCCESS: films => films,
            FAILURE: undefined,
        }, 
        SHOWS: {
            REQUEST: undefined,
            SUCCESS: film => film,
            FAILURE: undefined,
        }, 
    },
    { 
        namespace: '_' 
    }
);


export {search, shows};