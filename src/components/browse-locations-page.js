import React from 'react';
import {connect} from 'react-redux';
import {CompanyResult} from './company-result';

export class BrowseLocationsPage extends React.Component {

    render() {
      return (
        <div>Browse Locations Page
          <CompanyResult company={this.props.locations[0]} />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  locations: state.dbData.locations
});

export default connect(mapStateToProps)(BrowseLocationsPage);
