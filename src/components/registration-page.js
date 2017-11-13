import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import NavPages from './nav-pages';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <NavPages title="Signup for an account with Vintner" route="/"/>
            <div className="box" id="registration-box">
                <RegistrationForm />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
