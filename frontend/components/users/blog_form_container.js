import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import BlogForm from './blog_form';

class EditBlogForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.blog.id);
        }
    }

    render() {
        const { blog, updateUser } = this.props;

        if (!blog) return null;

        if (blog.id !== this.props.currentUser.id) {
            return null;
        }

        if (window.localStorage) {
            if (!localStorage.getItem('firstLoad')) {
                localStorage['firstLoad'] = true;
                window.location.reload();
            }
            else
                localStorage.removeItem('firstLoad');
        }

        return (
            <BlogForm
                blog={blog}
                updateUser={updateUser} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let blog = state.entities.users[ownProps.match.params.userId];
    let currentUser = state.session.currentUser;
    return ({
        blog: blog,
        currentUser: currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditBlogForm);