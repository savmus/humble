import { connect } from 'react-redux';
import Post from './post_index';
import { fetchPosts, fetchBlogPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = ({ entities }) => {
    let postsArr = Object.values(entities.posts);
    return ({
        allPosts: postsArr
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: (blog) => dispatch(fetchBlogPosts(blog)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);