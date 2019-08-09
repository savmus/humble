import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            avatar: "https://66.media.tumblr.com/2060fe62b7ed3b46e5789356942a305e/tumblr_o51oavbMDx1ugpbmuo2_250.png",
            blog_title: "Untitled"
        };

        this.clicked = false;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.update = this.update.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.clicked = true;

        this.setState({
            username: "",
            email: "",
            password: ""
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state);

        <Redirect to='/dashboard' />
    }

    handleDemo(e) {
        e.preventDefault();

        this.props.demo({
            username: "DemoUser",
            email: "demouser@demo.com",
            password: "12345678",
            avatar: "https://avatarfiles.alphacoders.com/865/86518.png",
            blog_title: "Untitled",
            blog_description: "Demo blogger."
        });

        this.setState({
            username: "",
            email: "",
            password: ""
        });

        <Redirect to='/dashboard' />
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value 
            })
        };
    };

    render() {
        let header = this.props.formType;
        let type = header.toLowerCase().split(' ').join('');

        if (header === 'Sign Up') {
            return (
                <div className={type}>
                    <h1 className='title'>humble</h1>
                    <Link to='/login'>Log In</Link>

                    <div className='slogan'>
                        <p>Come for stuff.</p>
                        <p>Stay for stuff.</p>
                    </div>

                    <button 
                        onClick={this.handleClick} 
                        className={`signup-btn ${this.clicked ? "hide-signup" : "reveal"}`}>Get Started</button>

                    <form 
                        onSubmit={this.handleSubmit} 
                        className={this.clicked ? "reveal" : "hide"}>

                        <label htmlFor='user-email'>
                        <input
                                type='text'
                                id='user-email'
                                onChange={this.update('email')}
                                placeholder='Email'
                            />
                        </label>

                        <label htmlFor='user-password'>
                        <input
                                type='password'
                                id='user-password'
                                onChange={this.update('password')}
                                placeholder='Password'
                            />
                        </label>

                        <label htmlFor='user-username'>
                        <input
                                type='text'
                                id='user-username'
                                onChange={this.update('username')}
                                placeholder='Username'
                            />
                        </label>

                        <ul className='errors'>
                            {this.props.errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>

                        <button className='signup-btn'>{header}</button>
                    </form>
                    <button
                        onClick={this.handleDemo}
                        className={`demo ${this.clicked ? "reveal" : "hide"}`}  
                    >Demo Login</button>
                </div>
            )
        } else {
            return (
                <div className={type}>
                    <h1 className='title'>humble</h1>
                    <Link to='/signup'>Sign Up</Link>

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='user-email'>
                        <input
                                type='text'
                                id='user-email'
                                onChange={this.update('email')}
                                placeholder='Email'
                            />
                        </label>

                        <label htmlFor='user-password'>
                        <input
                                type='password'
                                id='user-password'
                                onChange={this.update('password')}
                                placeholder='Password'
                            />
                        </label>

                        <ul className='errors'>
                            {this.props.errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>

                        <button>{header}</button>
                    </form>
                    <button 
                        onClick={this.handleDemo}
                        className='demo'
                    >Demo Login</button>
                </div>
            )
        }
    }
}

export default SessionForm;