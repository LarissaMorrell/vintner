import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {openModal} from '../actions/modal';
import {clearAuthToken} from '../local-storage';
import LoginForm from './login-form';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        let listItems;

        if(this.props.loggedIn){
          //if loggedIn render the profile link, logout button
          listItems = [
            <div className="pure-u-1-5" key="1">
              <Link to="/company">Find Booze!</Link>
            </div>,
            <div className="pure-u-1-5 nav-item" key="2">
              <Link to="/dashboard">Profile</Link>
            </div>,
            //TODO turn on button functionality for modal
            <div className="pure-u-1-5" key="3">
              <button onClick={() => this.logOut()}>Log out</button>
            </div>
          ];
        }
        else {
          listItems = [
            <div className="pure-u-1-5" key="1">
              <Link to="/location">See Reviews</Link>
            </div>,
            <div className="pure-u-1-5" key="2">
              <Link to="/register">Sign Up</Link>
            </div>,
            <div className="pure-u-1-5" key="3">
              <button onClick={e => this.props.dispatch(openModal(<LoginForm />))}>Login</button>
            </div>
          ]
        }

        return (
          <div className="navbar">
            <div className="nav-content pure-g">
              <div className="pure-u-2-5" id="navbar-logo">Vintner</div>
              {listItems}
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
