import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './navbar';
import Homepage from './homepage';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import CompaniesPage from './companies-page';
import CompanyPage from './company-page';
import DrinkReviewsPage from './drink-reviews-page';
import Footer from './footer';
import Modal from './modal';
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
          <Router>
            <div id="asd" className="app">
              <header>
                <Navbar loggedIn={this.props.loggedIn} />
              </header>
              <Route exact path="/" component={Homepage} />
              <div className="content-container">
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />
                <Route exact path="/companies" component={CompaniesPage} />
                <Route exact path="/company/:companyId" component={CompanyPage} />
                <Route exact path="/drink/:drinkId" component={DrinkReviewsPage} />
              </div>
              <Footer />
              <Modal display={this.props.display} formComponent={this.props.formComponent} />
            </div>
          </Router>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    display: state.modal.display,
    formComponent: state.modal.formComponent
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
