import { connect } from 'react-redux';
import Post from './post_index';
import { fetchPosts, fetchUserPosts, deletePost, createLike, deleteLike } from '../../actions/post_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities, session }) => {
    let postsArr = Object.values(entities.posts);
    let allUsers = entities.users;
    let currentUser = session.currentUser;
    let user = entities.users[currentUser.id];
    return ({
        allPosts: postsArr,
        user: currentUser,
        currentUser: user,
        allUsers: allUsers
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUserPosts: (user) => dispatch(fetchUserPosts(user)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    createLike: (id) => dispatch(createLike(id)),
    deleteLike: (id) => dispatch(deleteLike(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);