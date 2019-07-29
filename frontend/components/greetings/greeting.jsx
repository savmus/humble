import React from 'react';
import { Redirect } from 'react-router-dom';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.currentUser) {
            return (
                <div>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
        )} else {
            return (
                <div>
                    <Redirect to='/signup' />
                </div>
        )};
    }
}

export default Greeting;