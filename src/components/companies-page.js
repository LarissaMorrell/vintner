import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';
import NavPages from './nav-pages';
import {getCompanies} from '../actions/companies';

export class CompaniesPage extends React.Component {

  componentDidMount(){
    this.props.dispatch(getCompanies())
  }

//TODO code it for ALL companies in db
    render() {
      var companies = this.props.companies.map((company, i) =>
          <CompanyResult key={i} company={company} />
      );
      return (
        <div className="content-container">
          <NavPages title="Find a location" route="/"/>
          {companies}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  companies: state.APICompanies.companies
});

export default connect(mapStateToProps)(CompaniesPage);
