import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchUsers();
    }

    render() {
        if (!this.props.allUsers) {
            return null
        };

        let usersArr = Object.values(this.props.allUsers).slice(0, 4); // change later

        if (usersArr.length < 1) {
            return null
        }

        return (
            <aside className='sidebar'>
                <h2>Recommended Blogs</h2>
                <ul>
                    {usersArr.map((user, idx) => {
                        return (
                            <li key={idx}>
                                <img 
                                    src={user.avatar} 
                                    className='side-avatar' 
                                />
                                <Link 
                                    to={`/blogs/${user.id}`} 
                                    className='side-username'
                                >{user.username}</Link>
                                <Link 
                                    to={`/blogs/${user.id}`} 
                                    className='side-title'
                                >{user.blog_title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        )
    }
};

export default SideBar;