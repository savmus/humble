import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import ChatForm from './chat_form';


class EditChatForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.post.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post !== this.props.post) {
            this.props.fetchPost(this.props.post.id);
        }
    }

    render() {
        const { post, formType, action } = this.props;
        return (
            <ChatForm
                post={post}
                formType={formType}
                action={action} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let post = state.posts[ownProps.match.params.postId];
    return ({
        post: post,
        formType: "Edit Post"
    })
};

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    action: (post) => dispatch(updatePost(post))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditChatForm);