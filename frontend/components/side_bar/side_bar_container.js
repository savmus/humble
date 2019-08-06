import React from 'react';
import { connect } from 'react-redux';
import SideBar from './side_bar';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = ({ session, entities }) => {
    let currentUser = session.currentUser;
    let user = entities.users[currentUser.id];
    let allUsers = entities.users;
    return ({
        currentUser: user,
        allUsers: allUsers
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);