import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.login,
    formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    demo: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);