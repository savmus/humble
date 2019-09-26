import { connect } from 'react-redux';
import FollowsIndex from './follows_index';
import { fetchUsers } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = ({ entities, session }) => {
    let usersArr = Object.values(entities.users);
    let currentUser = session.currentUser;
    return ({
        users: usersArr,
        currentUser: currentUser
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    createFollow: id => dispatch(createFollow(id)),
    deleteFollow: id => dispatch(deleteFollow(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowsIndex);