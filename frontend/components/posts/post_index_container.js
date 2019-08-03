import { connect } from 'react-redux';
import Post from './post_index';
import { fetchPosts, fetchUserPosts, deletePost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    let postsArr = Object.values(state.entities.posts);
    let user = state.entities.users[ownProps.match.params.userId];
    let allUsers = state.entities.users;
    return ({
        allPosts: postsArr,
        user: user,
        currentUser: state.session.currentUser,
        allUsers: allUsers
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: (user) => dispatch(fetchUserPosts(user)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchUsers: () => dispatch(fetchUsers())
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);