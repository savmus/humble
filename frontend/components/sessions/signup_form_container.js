import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.signup,
    formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    demo: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);