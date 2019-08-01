import * as APIUtil from '../util/posts_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

const removePost = (post) => ({
    type: REMOVE_POST,
    postId: post.id
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const createPost = (post) => dispatch => APIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)), (error) => dispatch(receiveErrors(error)));

export const fetchUserPosts = (user) => dispatch => APIUtil.fetchUserPosts(user)
    .then(posts => dispatch(receivePosts(posts)));

export const fetchPosts = () => dispatch => APIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));

export const updatePost = (post) => dispatch => APIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)), (error) => dispatch(receiveErrors(error)));

export const deletePost = (id) => dispatch => APIUtil.deletePost(id)
    .then(post => dispatch(removePost(post)));

export const fetchPost = (id) => dispatch => APIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)));