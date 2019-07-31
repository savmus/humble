import * as APIUtil from '../util/blogs_util';

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveBlogs = (blogs) => ({
    type: RECEIVE_BLOGS,
    blogs
});

const receiveBlog = (blog) => ({
    type: RECEIVE_BLOG,
    blog
});

const removeBlog = (blog) => ({
    type: REMOVE_BLOG,
    blogId: blog.id
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors: errors.responseJSON
});

export const createBlog = (blog) => dispatch => APIUtil.createBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)), (error) => dispatch(receiveErrors(error)));

export const fetchBlogs = () => dispatch => APIUtil.fetchBlogs()
    .then(blogs => dispatch(receiveBlogs(blogs)));

export const fetchBlog = (id) => dispatch => APIUtil.fetchBlog(id)
    .then(blog => dispatch(receiveBlog(blog)));

export const updateBlog = (blog) => dispatch => APIUtil.updateBlog(blog)
    .then(blog => dispatch(receiveBlog(blog)), (error) => dispatch(receiveErrors(error)));

export const deleteBlog = (id) => dispatch => APIUtil.deleteBlog(id)
    .then(blog => dispatch(removeBlog(blog)));