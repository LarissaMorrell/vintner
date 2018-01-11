import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';
import NavPages from './nav-pages';
import {getCompanies} from '../actions/companies';
import ReactLoading from 'react-loading';

export class CompaniesPage extends React.Component {

  componentDidMount(){
    this.props.dispatch(getCompanies())
  }

    render() {
      var companies = this.props.companies.map((company, i) =>
          <CompanyResult key={i} company={company} />
      );
      if(companies.length === 0){
        return(
          <ReactLoading id="loading" className="center-horizontal" type="spin" color="#491722"/>
        );
      }
      return (
        <div className="content-container">
          <NavPages title="Find a location" route="/"/>
          {companies}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  companies: state.APIData.companies
});

export default connect(mapStateToProps)(CompaniesPage);
