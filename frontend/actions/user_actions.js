import * as APIUtil from '../util/users_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const removeUser = (user) => ({
    type: REMOVE_USER,
    userId: user.id
});

export const fetchUsers = () => dispatch => APIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));

export const updateUser = (user) => dispatch => APIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)));

export const deleteUser = (id) => dispatch => APIUtil.deleteUser(id)
    .then(user => dispatch(removeUser(user)));

export const fetchUser = (id) => dispatch => APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)));