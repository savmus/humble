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

        let usersArr = Object.values(this.props.allUsers).slice(0, -1);

        if (usersArr.length < 1) {
            return null
        }

        debugger;

        return (
            <div>
                <h2>Recommended Blogs</h2>
                <ul>
                    {usersArr.map((user, idx) => {
                        return (
                            <li key={idx}>
                                <img src={user.avatar} />
                                <Link to={`/blogs/${user.id}`}>{user.username}</Link>
                                <Link to={`/blogs/${user.id}`}>{user.blog_title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
};

export default SideBar;