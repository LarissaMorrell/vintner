import React from "react";
import { connect } from "react-redux";
import CompanyInfo from "./company-info";
import DrinkResult from "./drink-result";
import NavPages from "./nav-pages";
import { getCompany } from "../actions/companies";

import CreateDrinkForm from "./create-drink-form";
import { openModal } from "../actions/modal";
import LoginForm from "./login-form";

export class CompanyPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCompany(this.props.match.params.companyId));
  }
  createDrink(company) {
    if (this.props.loggedIn) {
      this.props.dispatch(openModal(<CreateDrinkForm company={company} />));
    } else {
      this.props.dispatch(openModal(<LoginForm />));
    }
  }

  render() {
    let drinkList = [];
    let drinks = this.props.company.drinks;

    for (let i = 0; i < drinks.length; i++) {
      drinkList.push(<DrinkResult key={i} drink={drinks[i]} />);
    }
    return (
      <div className="content-container">
        <NavPages title="Find a place" route="/companies" />
        <button
          className="drink-result"
          id="write-review"
          onClick={() => this.createDrink(this.props.company)}
        >
          Add Drink
        </button>
        <CompanyInfo company={this.props.company} />
        {drinkList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  company: state.APIData.company,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CompanyPage);
