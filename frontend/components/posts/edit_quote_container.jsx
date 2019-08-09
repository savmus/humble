import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import QuoteForm from './quote_form';


class EditQuoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        };

        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postId !== this.props.match.params.postId) {
            this.props.fetchPost(this.props.post.id);
        }
    }

    hideModal() {
        this.setState({
            show: false
        });
    }

    render() {
        const { post, formType, action } = this.props;

        if (!post) return null;

        if (post.author_id !== this.props.currentUser.id) {
            return null;
        }

        return (
            <QuoteForm
                post={post}
                formType={formType}
                action={action} 
                show={this.state.show}
                handleClose={this.hideModal} 
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let post = state.entities.posts[ownProps.match.params.postId];
    let currentUser = state.session.currentUser;
    return ({
        post: post,
        currentUser: currentUser,
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