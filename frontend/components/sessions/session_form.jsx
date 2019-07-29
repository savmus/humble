import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: ""
        };

        this.clicked = false;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.clicked = true;
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.processForm(this.state);

        this.setState({
            username: "",
            email: "",
            password: ""
        });

        <Redirect to='/' />
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
                    <Link to='/login'>Log In</Link>

                    <p>Come for pizza.</p>
                    <p>Stay for brownies.</p>

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

                        <ul>
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

                        <ul>
                            {this.props.errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>

                        <button>{header}</button>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm;