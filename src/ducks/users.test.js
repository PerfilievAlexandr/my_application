import {addNewUserSaga, ADD_USER, ADD_USER_REQUEST} from './users'
import {call, put} from 'redux-saga/effects';
import {generateId} from './utils'

it('shuld dispatch person with id', () => {
    const user = {
        firstname: 'Кекс',
        lastName: 'Кексович',
        email: '777@mail.ru'
    };

    const saga = addNewUserSaga({
        type: ADD_USER_REQUEST,
        payload: user
    })

    expect(saga.next().value).toEqual(call(generateId));

    const id = generateId();

    expect(saga.next(id).value).toEqual(put({
        type: ADD_USER,
        payload: {id, ...user}
    }))
})