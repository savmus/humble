import * as PostAPIUtil from '../util/posts_util';
import * as LikeAPIUtil from '../util/likes_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

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

export const createPost = (post) => dispatch => PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)));

export const fetchUserPosts = (user) => dispatch => PostAPIUtil.fetchUserPosts(user)
    .then(posts => dispatch(receivePosts(posts)));

export const fetchPosts = () => dispatch => PostAPIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)));

export const updatePost = (post) => dispatch => PostAPIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)));

export const deletePost = (id) => dispatch => PostAPIUtil.deletePost(id)
    .then(post => dispatch(removePost(post)));

export const fetchPost = (id) => dispatch => PostAPIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)));

export const createLike = id => dispatch => LikeAPIUtil.createLike(id)
    .then(post => dispatch(receivePost(post)));

export const deleteLike = id => dispatch => LikeAPIUtil.deleteLike(id)
    .then(post => dispatch(receivePost(post)));
