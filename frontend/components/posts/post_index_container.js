import { connect } from 'react-redux';
import Post from './post_index';
import { fetchPosts, fetchUserPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    let postsArr = Object.values(state.entities.posts);
    let user = state.entities.users[ownProps.match.params.userId];
    return ({
        allPosts: postsArr,
        user: user,
        currentUser: state.session.currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: (user) => dispatch(fetchUserPosts(user)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);