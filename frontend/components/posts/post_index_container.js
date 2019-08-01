import { connect } from 'react-redux';
import Post from './post_index';
import { fetchPosts, fetchBlogPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
    let postsArr = Object.values(state.entities.posts);
    let blog = state.entities.blogs[ownProps.match.params.blogId]
    return ({
        allPosts: postsArr,
        blog: blog
    })
};

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: (blog) => dispatch(fetchBlogPosts(blog)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Post);