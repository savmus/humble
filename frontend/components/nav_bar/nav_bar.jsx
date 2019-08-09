import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        e.preventDefault();

        if (!this.state.clicked) {
            this.setState({
                clicked: true
            });
        } else {
            this.setState({
                clicked: false
            });
        };
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

                    <Link 
                        to='/dashboard' 
                        className='home-link'><i className='fas fa-home'></i></Link>
                    <Link 
                        to='/explore' className='explore-link'><i className='far fa-compass'></i></Link>

                    <div className="dropdown">
                        <button 
                            className="dropbtn" 
                            onClick={this.handleClick} 
                        ><i className="fa fa-user"></i></button>
                        <div className={`dropdown-content ${this.state.clicked ? "reveal" : "hide"}`}>
                            <div className='dropdown-head'>ACCOUNT
                                <button onClick={this.props.logout} className='logout-btn'>Logout</button>
                            </div>
                            <div className='dropdown-links'>
                                <Link to='#'>
                                    <i className="fa fa-heart nav-like"></i>
                                    <span className='nav-like-text'>Likes</span>
                                </Link>
                                <Link to='#'>
                                    <i className="material-icons nav-follow">add_box</i>
                                    <span className='nav-follow-text'>Following</span>
                                </Link>
                            </div>
                        </div>
                    </div>
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