import React from 'react';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <Redirect to='/dashboard' />
                </div>
            )
        } else {
            return (
                <div>
                    <Redirect to='/signup' />
                </div>
            )
        };
    }
}

export default Home;