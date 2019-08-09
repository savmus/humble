import React from 'react';
import { Link } from 'react-router-dom';
import Follow from '../follows/follow';

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.fetched = false;
    }

    componentDidMount () {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (!this.fetched) {
            this.props.fetchUsers();
            this.fetched = true;
        }
    }

    refetch () {
        this.fetched = false;
    }

    render() {
        if (!this.props.allUsers || this.props.allUsers.length <= 1) {
            return null
        };

        let followsArr = [];
        
        this.props.allUsers.map((user) => {
            if (!user.followed_by_current_user) {
                followsArr.push(user);
            }
        });

        return (
            <aside className='sidebar'>
                <h2>Recommended Blogs</h2>
                <ul>
                    {followsArr.map((user, idx) => {
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
                                <Follow 
                                    user={user} 
                                    currentUser={this.props.currentUser} 
                                    createFollow={this.props.createFollow} 
                                    deleteFollow={this.props.deleteFollow} 
                                    refetch={this.refetch.bind(this)} 
                                />
                            </li>
                        );
                    })}
                </ul>
            </aside>
        )
    }
};

export default SideBar;