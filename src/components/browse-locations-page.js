import React from 'react';
import {connect} from 'react-redux';
import {LocationResult} from './location-result';

export class BrowseLocationsPage extends React.Component {

    render() {
      console.log(this.props.locations);
      return (
        <div>Browse Locations Page
          <LocationResult winery={this.props.locations[0]} />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  locations: state.dbData.locations
});

//why do I need to connect here?
export default connect(mapStateToProps)(BrowseLocationsPage);
