import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {reducer as form} from 'redux-form';
import authReduser, {moduleName as authModule} from '../ducks/auth';
import usersReduser, {moduleName as usersModule} from '../ducks/users';
import eventsReduser, {moduleName as eventsmodule} from '../ducks/events'

export default (history) => combineReducers({
    router: connectRouter(history),
    form: form,
    [authModule]: authReduser,
    [usersModule]: usersReduser,
    [eventsmodule]: eventsReduser
})