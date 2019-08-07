import { combineReducers } from 'redux';
import LoginErrorsReducer from './login_errors_reducer';
import SignupErrorsReducer from './signup_errors_reducer';

const errorsReducer = combineReducers({
    login: LoginErrorsReducer,
    signup: SignupErrorsReducer
});

export default errorsReducer;