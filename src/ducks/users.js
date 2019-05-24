import {appName} from '../config';

export const moduleName = 'users';
export const ADD_USER = `${appName}/${moduleName}/ADD_USER`;

export default function reduser(state = [], action) {
    const {type, payload, error} = action;

    switch (type) {
        case ADD_USER: 
            return [...state, payload]
        
        default: 
            return state
    }
};

export function addNewUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
};