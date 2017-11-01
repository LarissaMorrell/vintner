import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import Navbar from './navbar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import BrowseLocationsPage from './browse-locations-page';
import CompanyPage from './company-page';
import DrinkReviewsPage from './drink-reviews-page';
import Footer from './footer';
import {refreshAuthToken} from '../actions/auth';

export class App extends React.Component {
    componentDidMount() {
        if (this.props.hasAuthToken) {
            // Try to get a fresh auth token if we had an existing one in
            // localStorage
            this.props.dispatch(refreshAuthToken());
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
              <header>
                <Navbar loggedIn={this.props.loggedIn} />
              </header>
              <div className="content-container">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/location" component={BrowseLocationsPage} />
                <Route exact path="/location/:locId" component={CompanyPage} />
                <Route exact path="/drink/:drinkId" component={DrinkReviewsPage} />
              </div>
              <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
