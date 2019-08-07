import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        if (this.props.currentUser) {
            return (
                <nav className='nav-bar-in'>
                    <Link
                        to='/dashboard'
                        className='to-dash'
                    >h</Link>
                    <input
                        type='text'
                        placeholder='Search Humble' 
                        className='search-bar' 
                    />

                    <button onClick={this.props.logout} className='logout-btn'>Logout</button>
                </nav>
            )
        } else {
            return (
                <nav className='nav-bar-out'>
                    <Link
                        to='/signup'
                        className='to-dash'
                    >h</Link>
                    <input 
                        type='text' 
                        placeholder='Search Humble' 
                        className='search-bar' 
                    />
                </nav>
            )
        };
    }
};

export default NavBar;