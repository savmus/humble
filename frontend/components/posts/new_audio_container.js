import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import AudioForm from './audio_form';

const mapStateToProps = ({ session }) => {
    let userId = session.currentUser.id;
    let date = new Date();
    return ({
        post: {
            blog_id: 1, // change later
            author_id: userId,
            url: "",
            post_status: "Posted", // change later
            post_type: "Audio",
            publish_date: date
        },
        formType: "Create Post"
    })
};

const mapDispatchToProps = dispatch => ({
    action: (post) => dispatch(createPost(post))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioForm);