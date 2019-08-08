import { connect } from 'react-redux';
import Blog from './blog';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPosts, createLike, deleteLike } from '../../actions/post_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    let blog = state.entities.users[ownProps.match.params.userId];
    let currentUser = state.session.currentUser;
    let user = state.entities.users[currentUser.id];

    return ({
        blog: blog,
        user: currentUser,
        currentUser: user
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserPosts: (user) => dispatch(fetchUserPosts(user)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
    createLike: (id) => dispatch(createLike(id)),
    deleteLike: (id) => dispatch(deleteLike(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Blog);