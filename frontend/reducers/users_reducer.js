import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, {
                [action.user.id]: action.user
            });
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            return merge({}, state, {
                [action.user.id]: action.user
            });
        case REMOVE_USER:
            let newState = merge({}, state);
            delete newState[action.userId];
            return newState;
        default:
            return state;
    }
};