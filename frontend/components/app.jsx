import React from 'react';
// import GreetingContainer from './greetings/greeting_container';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>humble</h1>
            {/* Greeting is temporary and only for testing purposes */}
            <GreetingContainer /> 
        </header>

        {/* <AuthRoute path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </div>
);

export default App;
