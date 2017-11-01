import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';

export class BrowseLocationsPage extends React.Component {

//TODO code it for ALL locations in db
    render() {
      var locations = this.props.locations.map((company, i) =>
          <CompanyResult key={i} company={company} />
      );
      return (
        <div>Browse Locations Page
          {locations}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  locations: state.dbData.locations
});

export default connect(mapStateToProps)(BrowseLocationsPage);
