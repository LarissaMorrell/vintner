import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export function Homepage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
//<img className="glassware-img" src="/media/glasses.png" alt="beverage glasses"/>
    return (
        <div>
          <div className="video-container">
            <video src="/media/wine-pour.mp4" autoPlay="true" loop="true"></video>
            <div className="overlay"></div>
          </div>
          <div className="background-img"></div>
          <div id="homepage-descriptions-container">
            <section>
              <div className="section-container">
                <h1>Are drink menus confusing? We are here to help.
                  Never again waste your time on a drink you hate.</h1>
              </div>
              <div className="glassware-container">

              </div>
            </section>
            <section>
              <div className="section-container">
                <h1>
                  Read reviews of drinks made by craft brewers and vintners
                </h1>
              </div>
            </section>
            <section>
              <div className="section-container left-align">
                <div className="pure-g">
                  <div className="pure-u-16-24">
                    <h1 className="left-align">Learn which drinks are available...
                      <br/>before you even get there.
                    </h1>
                    <div className="love-hate">
                      <p>Did people</p>
                      <b>
                        <div className="inner-love-hate">
                          hate it?<br/>
                          love it?<br/>
                          love it enough to buy it?
                        </div>
                      </b>
                    </div>
                  </div>
                  <div className="pure-u-8-24">
                    <div className="image-border">
                      <div className="main-image"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="section-container">
                <h1>
                  Do even more with a Vintner account
                </h1>
                  <ul className="left-align">
                  <li className="left-align">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Keep track of your travels
                  </li>
                  <li className="left-align">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Which have you already tried? Bought?
                  </li>
                  <li className="left-align">
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
