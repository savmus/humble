import { connect } from 'react-redux';
import Blog from './blog';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPosts } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    let blog = state.entities.users[ownProps.match.params.userId];
    return ({
        blog: blog
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserPosts: (user) => dispatch(fetchUserPosts(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Blog);