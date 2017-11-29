import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function Homepage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
          <div className="video-container">
            <video src="/media/wine-pour.mp4" autoPlay="true" loop="true"></video>
            <div className="overlay"></div>
          </div>
          <div className="background-img"></div>
          <div id="homepage-descriptions-container">
            <section>
              <div className="pure-g">
                <div className="pure-u-1-1 pure-u-md-3-5">
                  <div className="section-container">
                        <h1>Are drink menus confusing? We are here to help.
                          Never again waste your time on a drink you hate.</h1>
                  </div>
                </div>
                <div className="pure-u-1-5">
                  <div className="image-border">
                    <div className="main-image"></div>
                  </div>
                </div>
                <div className="mobile-img-container">
                  <img className="mobile-img" src="/media/glasses.png" alt="beverage glasses"/>
                </div>
              </div>
            </section>
            <section>
              <div className="section-container">
                <h1>
                  Learn more about the drinks places are offering... before you even get there.
                </h1>
              </div>
            </section>
            <section>
              <div className="section-container">
                <h1>Before visiting the tasting room, find out</h1>
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
              </div>
            </section>
            <section>
              <div className="section-container">
                <h1>
                  Do even more with a Vintner account
                </h1>
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
              </div>
            </section>
          </div>
        </div>
    );
}
// <img className="tasting-room" src="/media/beer-pour.jpg" alt="tasting room"/>

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Homepage);
