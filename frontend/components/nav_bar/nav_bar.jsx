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

                    <div className='my-nav-links'>
                        <a href='https://github.com/savmus'><i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/savannah-musladin-525948193/'><i className="fab fa-linkedin-in"></i></a>
                        <a href='https://angel.co/savmus'><i className="fab fa-angellist"></i></a>
                        <div className='portfolio'>
                            <a href='https://savmus.github.io/portfolio/'>Savannah</a>
                            <a href='https://savmus.github.io/portfolio/'>Musladin</a>
                        </div>
                    </div>

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
                                <Link to='/likes'>
                                    <i className="fa fa-heart nav-like"></i>
                                    <span className='nav-like-text'>Likes</span>
                                </Link>
                                <Link to='/following'>
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

                    <div className='my-nav-links'>
                        <a href='https://github.com/savmus'><i className="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/savannah-musladin-525948193/'><i className="fab fa-linkedin-in"></i></a>
                        <a href='https://angel.co/savmus'><i className="fab fa-angellist"></i></a>
                        <div className='portfolio'>
                            <a href='https://savmus.github.io/portfolio/'>Savannah</a>
                            <a href='https://savmus.github.io/portfolio/'>Musladin</a>
                        </div>
                    </div>
                </nav>
            )
        };
    }
};

export default NavBar;