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
            <li key="1">
              <Link to="/companies">Find Places</Link>
            </li>,
            <li key="2">
              <Link to="/dashboard">Profile</Link>
            </li>,
            //TODO turn on button functionality for modal
            <li key="3">
              <Link to="" onClick={() => this.logOut()}>Log out</Link>
            </li>
          ];
        }
        else {
          listItems = [
            <li key="1">
              <Link to="/companies">Find Places</Link>
            </li>,
            <li key="2">
              <Link to="/register">Sign Up</Link>
            </li>,
            <li key="3">
              <Link to="" onClick={e => this.props.dispatch(openModal(<LoginForm />))}>Login</Link>
            </li>
          ]
        }

        return (
          <header className="header">
            <a href="" className="logo">Vintner</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              {listItems}
            </ul>
          </header>
        );
    }
}
// <div className="navbar pure-menu pure-menu-horizontal">
//   <div className="pure-menu-heading" id="nav-brand">Vintner</div>
//   <ul className="pure-menu-list">
//     {listItems}
//   </ul>
// </div>

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
