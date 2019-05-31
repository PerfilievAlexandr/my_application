import {appName} from '../config';
import {put, takeEvery, call} from 'redux-saga/effects';
import {generateId} from './utils';


export const moduleName = 'users';
export const ADD_USER_REQUEST = `${appName}/${moduleName}/ADD_USER_REQUEST`;
export const ADD_USER = `${appName}/${moduleName}/ADD_USER`;

export default function reduser(state = [], action) {
    const {type, payload, error} = action;

    switch (type) {
        case ADD_USER:
                console.log('test3', payload) 
            return [...state, payload]
        
        default: 
            return state
    };
};

export function addNewUser(person) {
    console.log('ADD_USER_REQUEST')
    return {
        type:  ADD_USER_REQUEST,
        payload: person
    };
};

export const addNewUserSaga = function*(action) {
    const id = yield call(generateId);
    console.log('ADD_USER')
    yield put({
        type: ADD_USER,
        payload: {...action.payload, id: id}
    });
};

export const saga = function*() {
    console.log('ADD_USER_REQUEST --- listener')
    yield takeEvery(ADD_USER_REQUEST, addNewUserSaga)
};