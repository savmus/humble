import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import ChatForm from './chat_form';

const mapStateToProps = ({ session }) => {
    let userId = session.currentUser.id;
    let date = new Date();
    return ({
        post: {
            blog_id: 1, // temporary
            author_id: userId,
            title: "",
            description: "",
            post_status: "Posted", // change later
            post_type: "Chat",
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
)(ChatForm);