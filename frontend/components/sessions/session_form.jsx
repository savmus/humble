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

        this.setState({
            username: "",
            email: "",
            password: ""
        });

        <Redirect to='/dashboard' />
    }

    handleDemo(e) {
        e.preventDefault();

        this.props.processForm({
            username: "demo",
            email: "demo@demo.com",
            password: "12345678"
        });

        this.setState({
            username: "",
            email: "",
            password: ""
        });

        <Redirect to='/signup' />
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
                        className={this.clicked ? "hide" : "reveal"}>Get Started</button>

                    <form 
                        onSubmit={this.handleSubmit} 
                        className={this.clicked ? "reveal" : "hide"}>
                        <label htmlFor='user-username'>
                        <input
                                type='text'
                                id='user-username'
                                onChange={this.update('username')}
                                placeholder='Username'
                            />
                        </label>

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