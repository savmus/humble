import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import blogsReducer from './blogs_reducer';
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    blogs: blogsReducer,
    posts: postsReducer
});

export default entitiesReducer;