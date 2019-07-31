import { connect } from 'react-redux';
import Blog from './blog_show';
import { fetchBlog, deleteBlog } from '../../actions/blog_actions';

const mapStateToProps = (state, ownProps) => {
    let blog = state.entities.blogs[ownProps.match.params.blogId];
    return ({
        blog: blog
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    deleteBlog: (id) => dispatch(deleteBlog(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Blog);