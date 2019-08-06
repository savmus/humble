import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <nav>
                    <Link
                        to='/dashboard'
                        className='to-dash'
                    >h</Link>
                    <input
                        type='text'
                        placeholder='Search'
                    />

                    <button onClick={this.props.logout} className='logout-btn'>Logout</button>
                </nav>
            )
        } else {
            return (
                <nav>
                    <Link
                        to='/signup'
                        className='to-dash'
                    >h</Link>
                    <input 
                        type='text' 
                        placeholder='Search' 
                    />
                </nav>
            )
        };
    }
};

export default NavBar;