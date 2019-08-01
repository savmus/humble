import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import LoginFormContainer from './sessions/login_form_container';
import SignupFormContainer from './sessions/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import BlogContainer from './blogs/blog_show_container';
import HomeContainer from './home/home_container';
import NewTextFormContainer from './posts/new_text_container';
import EditTextFormContainer from './posts/edit_text_container';
import NewPhotoFormContainer from './posts/new_photo_container';
import EditPhotoFormContainer from './posts/edit_photo_container';
import NewQuoteFormContainer from './posts/new_quote_container';
import EditQuoteFormContainer from './posts/edit_quote_container';
import NewLinkFormContainer from './posts/new_link_container';
import EditLinkFormContainer from './posts/edit_link_container';
import NewChatFormContainer from './posts/new_chat_container';
import EditChatFormContainer from './posts/edit_chat_container';
import NewAudioFormContainer from './posts/new_audio_container';
import EditAudioFormContainer from './posts/edit_audio_container';
import NewVideoFormContainer from './posts/new_video_container';
import EditVideoFormContainer from './posts/edit_video_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            {/* <NavBarContainer /> */}
            <h1 className='title'>humble</h1>
            <GreetingContainer />
        </header>

        <Route exact path="/" component={HomeContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/dashboard" component={PostIndexContainer} />
        <ProtectedRoute path="/blogs/:blogId" component={BlogContainer} />
        <ProtectedRoute path="/new/text" component={NewTextFormContainer} />
        <ProtectedRoute path="/edit/text/:postId" component={EditTextFormContainer} />
        <ProtectedRoute path="/new/photo" component={NewPhotoFormContainer} />
        <ProtectedRoute path="/edit/photo/:postId" component={EditPhotoFormContainer} />
        <ProtectedRoute path="/new/quote" component={NewQuoteFormContainer} />
        <ProtectedRoute path="/edit/quote/:postId" component={EditQuoteFormContainer} />
        <ProtectedRoute path="/new/link" component={NewLinkFormContainer} />
        <ProtectedRoute path="/edit/link/:postId" component={EditLinkFormContainer} />
        <ProtectedRoute path="/new/chat" component={NewChatFormContainer} />
        <ProtectedRoute path="/edit/chat/:postId" component={EditChatFormContainer} />
        <ProtectedRoute path="/new/audio" component={NewAudioFormContainer} />
        <ProtectedRoute path="/edit/audio/:postId" component={EditAudioFormContainer} />
        <ProtectedRoute path="/new/video" component={NewVideoFormContainer} />
        <ProtectedRoute path="/edit/video/:postId" component={EditVideoFormContainer} />
    </div>
);

export default App;
