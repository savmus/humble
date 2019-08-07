import * as APIUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveLoginErrors = (errors) => ({
    type: RECEIVE_LOGIN_ERRORS,
    errors: errors.responseJSON
});

const receiveSignupErrors = (errors) => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors: errors.responseJSON
})

export const login = (user) => dispatch => APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), (error) => dispatch(receiveLoginErrors(error)));

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));

export const signup = (user) => dispatch => APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), (error) => dispatch(receiveSignupErrors(error)));