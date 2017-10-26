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
        //why was this working prior to being passed in through props????
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //       <button onClick={() => this.logOut()}>Log out</button>
        //     );
        // }

        let listItems;
        //
        if(this.props.loggedIn){
          //if loggedIn render the profile link, logout button
          listItems = [
            <li key="1"><Link to="/dashboard">Profile</Link></li>,
            //TODO turn on button functionality for modal
            <li key="2"><button onClick={() => this.logOut()}>Log out</button></li>
          ];
        }
        else {
          listItems = [
            <li key="1">
              <button >Login</button>
            </li>,
            <li key="2">
              <Link to="/register">Sign Up</Link>
            </li>
          ]
        }


        return (
            <div className="navbar">
              <ul>
                <li><div className="navbar-title">Vintner</div></li>
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
