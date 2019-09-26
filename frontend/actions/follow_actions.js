import * as APIUtil from '../util/follows_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = (follow) => ({
    type: REMOVE_FOLLOW,
    followId: follow.id
});

export const createFollow = (id) => dispatch => APIUtil.createFollow(id)
    .then(follow => dispatch(receiveFollow(follow)));

export const deleteFollow = (id) => dispatch => APIUtil.deleteFollow(id)
    .then(follow => dispatch(removeFollow(follow)));