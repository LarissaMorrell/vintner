import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
              <button onClick={() => this.logOut()}>Log out</button>
            );
        }


        return (
            <div className="navbar">
              <ul>
                <li><div className="navbar-title">Vintner</div></li>
                <li><Link to="/dashboard">Profile</Link></li>
                <li>{logOutButton}</li>
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
