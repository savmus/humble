import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import QuoteForm from './quote_form';


class EditQuoteForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.props.fetchPost(this.props.post.id);
        }
    }

    render() {
        const { post, formType, action } = this.props;

        if (!post) return null;
        return (
            <QuoteForm
                post={post}
                formType={formType}
                action={action} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let post = state.entities.posts[ownProps.match.params.postId];
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
)(EditQuoteForm);