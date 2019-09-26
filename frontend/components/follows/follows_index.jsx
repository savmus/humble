import React from 'react';
import Follow from './follow';
import { Link } from 'react-router-dom';

class LikesIndex extends React.Component {
    constructor(props) {
        super(props);

        this.fetched = false;
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    componentDidUpdate(prevProps) {
        if (!this.fetched) {
            this.props.fetchUsers();
            this.fetched = true;
        }
    }

    refetch() {
        this.fetched = false;
    }

    render() {
        if (this.props.users.length === 0) {
            return null
        };

        let followedUsers = [];

        for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].followed_by_current_user && this.props.users[i].id !== this.props.currentUser.id) {
                followedUsers.push(this.props.users[i]);
            }
        };

        return (
            <div className='user-index'>
                <h2>Following {followedUsers.length} Humbles</h2>
                <ul className='users'>
                    {followedUsers.map((user, idx) => {
                        return (
                            <li key={idx} className='user'>
                                <img
                                    src={user.avatar}
                                    className='follow-avatar'
                                />
                                <Link
                                    to={`/blogs/${user.id}`}
                                    className='follow-username'
                                >{user.username}</Link>
                                <Link
                                    to={`/blogs/${user.id}`}
                                    className='follow-title'
                                >{user.blog_title}</Link>
                                <Follow
                                    user={user}
                                    idx={idx}
                                    currentUser={this.props.currentUser}
                                    createFollow={this.props.createFollow}
                                    deleteFollow={this.props.deleteFollow}
                                    refetch={this.refetch.bind(this)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default LikesIndex;