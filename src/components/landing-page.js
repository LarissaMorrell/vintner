import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Modal from './modal';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
          <div className="fullscreen-video-wrap">
            <video src="/media/wine-pour.mp4" autoPlay="true" loop="true"></video>
            <div className="overlay"></div>
          </div>
          <div className="landing-content">
            <h2>Helping you find the perfect drink</h2>
            <Modal />
          </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
