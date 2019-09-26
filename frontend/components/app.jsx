import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';
import EditTextFormContainer from './posts/edit_text_container';
import EditPhotoFormContainer from './posts/edit_photo_container';
import EditQuoteFormContainer from './posts/edit_quote_container';
import EditLinkFormContainer from './posts/edit_link_container';
import BlogContainer from './users/blog_container';
import BlogFormContainer from './users/blog_form_container';
import SideBarContainer from './side_bar/side_bar_container';
import ExploreContainer from './posts/explore_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
            <GreetingContainer />
        </header>

        <Route exact path="/" component={HomeContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/dashboard" component={PostIndexContainer} />
        <ProtectedRoute path="/dashboard" component={SideBarContainer} />
        <ProtectedRoute path="/edit/text/:postId" component={EditTextFormContainer} />
        <ProtectedRoute path="/edit/photo/:postId" component={EditPhotoFormContainer} />
        <ProtectedRoute path="/edit/quote/:postId" component={EditQuoteFormContainer} />
        <ProtectedRoute path="/edit/link/:postId" component={EditLinkFormContainer} />
        <Route exact path="/blogs/:userId" component={BlogContainer} />
        <ProtectedRoute exact path="/blogs/:userId/edit" component={BlogFormContainer} />
        <ProtectedRoute path='/explore' component={ExploreContainer} />
    </div>
);

export default App;
