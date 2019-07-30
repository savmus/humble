import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1 className='title'>humble</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
