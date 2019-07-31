import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import blogErrorsReducer from './blog_errors_reducer';
import postErrorsReducer from './post_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    blogs: blogErrorsReducer,
    posts: postErrorsReducer
});

export default errorsReducer;