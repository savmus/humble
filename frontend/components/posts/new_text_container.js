import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import TextForm from './text_form';

const mapStateToProps = ({ session, entities }) => {
    let userId = session.currentUser.id;
    let date = new Date();

    return ({
        post: {
            author_id: userId,
            title: "",
            description: "",
            post_status: "Posted", // change later
            post_type: "text",
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
)(TextForm);