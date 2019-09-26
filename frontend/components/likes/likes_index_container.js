import { connect } from 'react-redux';
import LikesIndex from './likes_index';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ({ entities, session }) => {
    let postsArr = Object.values(entities.posts);
    return ({
        posts: postsArr
    })
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(LikesIndex);