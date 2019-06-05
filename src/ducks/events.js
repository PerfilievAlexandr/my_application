import { appName } from '../config';
import { put, all, call, take } from 'redux-saga/effects';
import firebase from 'firebase'

/**
 * Constants
 */
export const moduleName = 'events';
const prefix = `${appName}/${moduleName}`;

export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`;
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`;

const initialState = {
    entites: null,
    loading: false,
    loaded: false
};

/**
 * Reduser
 */
export default function reduser(state = initialState, action) {
    const { type, payload, error } = action;

    switch (type) {

        case FETCH_ALL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                entites: payload
            }

        default:
            return state
    };
};

/**
 * Selectors
 */

/**
* Action Creators
*/

export function fetchAll() {
    return {
        type: FETCH_ALL_REQUEST
    }
};

/**
* Sagas
*/

export const fetchAllSaga = function* () {
    while (true) {
        yield take(FETCH_ALL_REQUEST)

        const ref = firebase.database().ref('events');

        const data = yield call([ref, ref.once], 'value');

        yield put({
            type: FETCH_ALL_SUCCESS,
            payload: data.val()
        })
    };
};

export function* saga() {
    yield all([
        fetchAllSaga(),
    ]);
}