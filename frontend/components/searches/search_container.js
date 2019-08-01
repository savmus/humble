import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = ({ entities }) => {
    let userArr = Object.values(entities.users);
    let usernames = userArr.map(user => {
        return user.username
    });

    return ({
        users: usernames
    })
};

const mapDispatchToProps = dispatch => {
    return null
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);