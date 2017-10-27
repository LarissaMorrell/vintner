import React from 'react';
import {connect} from 'react-redux';
import {LocationResult} from './location-result';

export class BrowseLocationsPage extends React.Component {

    render() {
      const winery = {
        name: "Nashoba",
        streetAddress: "4 slug way",
        city: "Elixatown",
        state: "MA",
        rating: [true, true, true, false, false]
      }

      return (
        <div>Browse Locations Page
          <LocationResult winery={winery} />
        </div>
      );
    }
}

//why do I need to connect here?
export default connect()(BrowseLocationsPage);
