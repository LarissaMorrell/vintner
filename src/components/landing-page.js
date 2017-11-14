import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
          <div className="video-container">
            <video src="/media/wine-pour.mp4" autoPlay="true" loop="true"></video>
              <div className="overlay"></div>
          </div>
          <div className="landing-content">
            <section>
              <h2>Reviews for</h2>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Wine
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Beer
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Mead
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Cider
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Spirits
                </li>
              </ul>
            </section>
            <section>
              <h2>
                Never waste time and money on trying that drink you forgot you hated
              </h2>
              <h2>
                Remember the drinks worth buying again
              </h2>
            </section>
            <section>
              Before visiting the tasting room, find out
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Which drinks are available?
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Did people love it... or hate it?
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Is the drink worth buying?
                </li>
              </ul>
            </section>
            <section>
              <h2>
                Do even more with a Vintner account
              </h2>
              <ul>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                Keep track of your travels
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                Which have you already tried? Bought?
              </li>
              <li>
                <i className="fa fa-check" aria-hidden="true"></i>
                Leave reviews for yourself and others
              </li>
              </ul>
            </section>
          </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
