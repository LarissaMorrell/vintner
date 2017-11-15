import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';
import NavPages from './nav-pages';

export class BrowseCompaniesPage extends React.Component {

//TODO code it for ALL companies in db
    render() {
      var companies = this.props.companies.map((company, i) =>
          <CompanyResult key={i} company={company} />
      );
      return (
        <div>
          <NavPages title="Find a location" route="/"/>
          {companies}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  companies: state.dbData.companies
});

export default connect(mapStateToProps)(BrowseCompaniesPage);
