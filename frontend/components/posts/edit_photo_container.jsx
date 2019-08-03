import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PhotoForm from './photo_form';


class EditPhotoForm extends React.Component {
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

        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }
        
        return (
            <PhotoForm
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
)(EditPhotoForm);