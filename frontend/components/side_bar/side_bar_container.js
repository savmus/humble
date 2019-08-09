import React from 'react';
import { connect } from 'react-redux';
import SideBar from './side_bar';
import { fetchUsers } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = ({ session, entities }) => {
    let currentUser = session.currentUser;
    let user = entities.users[currentUser.id];
    let allUsers = Object.values(entities.users);
    return ({
        currentUser: currentUser,
        user: user,
        allUsers: allUsers
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow)
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);