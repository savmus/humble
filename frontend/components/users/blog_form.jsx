import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BlogForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.blog;

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let blog = Object.assign({}, this.state);
        this.props.updateUser(blog);

        this.setState({
            avatar: "",
            blog_title: "",
            blog_description: ""
        })

        this.props.history.push(`/blogs/${blog.id}`);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.history.push(`/blogs/${this.props.blog.id}`);
    }

    render() {
        return (
            <div className='blog-form'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='user-avatar'>
                        <input
                            type="url" 
                            id='user-avatar' 
                            onChange={this.update("avatar")} 
                            placeholder="Avatar" 
                            value={this.state.avatar || ""} 
                        />
                    </label>

                    <label htmlFor='blog-title'>
                        <input
                            type="text" 
                            id='blog-title' 
                            onChange={this.update("blog_title")} 
                            placeholder="Title" 
                            value={this.state.blog_title || ""} 
                        />
                    </label>

                    <label htmlFor='blog-description'>
                        <input
                            type="text" 
                            id='blog-description' 
                            onChange={this.update("blog_description")} 
                            placeholder="Description" 
                            value={this.state.blog_description || ""} 
                        />
                    </label>

                    <Link to={`/blogs/${this.props.blog.id}`}>Close</Link>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default withRouter(BlogForm);