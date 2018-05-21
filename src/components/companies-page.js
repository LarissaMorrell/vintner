import React from "react";
import { connect } from "react-redux";
import { CompanyResult } from "./company-result";
import NavPages from "./nav-pages";
import { getCompanies } from "../actions/companies";
import ReactLoading from "react-loading";

import CreateCompanyForm from "./create-company-form";
import { openModal } from "../actions/modal";
import LoginForm from "./login-form";

export class CompaniesPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCompanies());
  }
  createCompany() {
    if (this.props.loggedIn) {
      this.props.dispatch(openModal(<CreateCompanyForm />));
    } else {
      this.props.dispatch(openModal(<LoginForm />));
    }
  }
  render() {
    var companies = this.props.companies.map((company, i) => (
      <CompanyResult key={i} company={company} />
    ));
    if (companies.length === 0) {
      return (
        <ReactLoading
          id="loading"
          className="center-horizontal"
          type="spin"
          color="#491722"
        />
      );
    }
    return (
      <div className="content-container">
        <NavPages title="Find a location" route="/" />
        <button
          className="drink-result"
          id="write-review"
          onClick={() => this.createCompany()}
        >
          Create Company
        </button>
        {companies}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  companies: state.APIData.companies,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CompaniesPage);
