import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';
import NavPages from './nav-pages';

export class BrowseLocationsPage extends React.Component {

//TODO code it for ALL locations in db
    render() {
      var locations = this.props.locations.map((company, i) =>
          <CompanyResult key={i} company={company} />
      );
      return (
        <div>
          <NavPages title="Find a location" route="/"/>
          {locations}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  locations: state.dbData.locations
});

export default connect(mapStateToProps)(BrowseLocationsPage);
