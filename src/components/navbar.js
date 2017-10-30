import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {openModal} from '../actions/modal';
import {clearAuthToken} from '../local-storage';

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
            <div className="pure-u-1-5 nav-item" key="1"><Link to="/dashboard">Profile</Link></div>,
            //TODO turn on button functionality for modal
            <div className="pure-u-1-5" key="2"><button onClick={() => this.logOut()}>Log out</button></div>
          ];
        }
        else {
          listItems = [
            <div className="pure-u-1-5" key="2">
              <Link to="/register">Sign Up</Link>
            </div>,
            <div className="pure-u-1-5" key="1">
              <button onClick={e => this.props.dispatch(openModal())}>Login</button>
            </div>
          ]
        }

        return (
          <div className="navbar pure-g">
            <div className="pure-u-3-5" id="navbar-logo">Vintner</div>
            {listItems}
          </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);
