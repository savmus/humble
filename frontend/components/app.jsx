import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import BlogContainer from './blogs/blog_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            {/* <NavBarContainer /> */}
            <h1 className='title'>humble</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/dashboard" component={PostIndexContainer} />
        <ProtectedRoute path="/blogs/:blogId" component={BlogContainer} />
        {/* <ProtectedRoute path="/new/:type" component={PostFormContainer} /> */}
        {/* <ProtectedRoute path="/edit/:postId" component={PostFormContainer} /> */}
    </div>
);

export default App;
