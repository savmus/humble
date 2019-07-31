import { RECEIVE_BLOGS, RECEIVE_BLOG, REMOVE_BLOG } from '../actions/blog_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BLOGS:
            return action.blogs
        case RECEIVE_BLOG:
            return merge({}, state, {
                [action.blog.id]: action.blog
            });
        case REMOVE_BLOG:
            let newState = merge({}, state);
            delete newState[action.blogId];
            return newState;
        default:
            return state;
    }
};