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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
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
        let link = <Link to='/' />;

        if (header === 'Sign Up') {
            link = <Link to='/login' />
        } else {
            link = <Link to='/signup' />
        }

        return (
            <div>
                <h2>{header}</h2>
                {link}
                <ul>
                    {this.props.errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='user-username'>Username
                        <input
                            type='text'
                            id='user-username'
                            onChange={this.update('username')}
                            value={this.state.username}
                        />
                    </label>

                    <label htmlFor='user-email'>Email
                        <input
                            type='text'
                            id='user-email'
                            onChange={this.update('email')}
                            value={this.state.email}
                        />
                    </label>

                    <label htmlFor='user-password'>Password
                        <input
                            type='password'
                            id='user-password'
                            onChange={this.update('password')}
                            value={this.state.password}
                        />
                    </label>

                    <button>{header}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;