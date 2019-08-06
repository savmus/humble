import React from 'react';
import { Redirect } from 'react-router-dom';

class Greeting extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (!this.props.currentUser) {
            return (
                <div>
                    <Redirect to='/signup' />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Greeting;