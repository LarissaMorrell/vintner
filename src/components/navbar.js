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
            <li className="pure-menu-item nav-item" key="1">
              <Link to="/company" className="pure-menu-link nav-link">Find Places</Link>
            </li>,
            <li className="pure-menu-item nav-item" key="2">
              <Link className="pure-menu-link nav-link"to="/dashboard">Profile</Link>
            </li>,
            //TODO turn on button functionality for modal
            <li className="pure-menu-item" key="3">
              <button className="pure-menu-link" onClick={() => this.logOut()}>Log out</button>
            </li>
          ];
        }
        else {
          listItems = [
            <li className="pure-menu-item nav-item" key="1">
              <Link className="pure-menu-link nav-link" to="/company">Find Places</Link>
            </li>,
            <li className="pure-menu-item nav-item" key="2">
              <Link className="pure-menu-link nav-link" to="/register">Sign Up</Link>
            </li>,
            <li className="pure-menu-item" key="3">
              <button className="pure-menu-link" onClick={e => this.props.dispatch(openModal(<LoginForm />))}>Login</button>
            </li>
          ]
        }

        return (
          <div className="navbar pure-menu pure-menu-horizontal">
            <div className="pure-menu-heading" id="nav-brand">Vintner</div>
            <ul className="pure-menu-list">
              {listItems}
            </ul>
          </div>
        );
    }
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
