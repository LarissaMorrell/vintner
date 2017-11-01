import React from 'react';
import {connect} from 'react-redux';
import Rating from './rating';
import DrinkResult from './drink-result';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

export class WineryPage extends React.Component {

    render() {
        let winery = this.props.location;

        return (
          <div className="pure-g">
            <div className="pure-3-5">
              <h1>{this.props.name}</h1>
              
            </div>
            <DrinkResult drink={winery.drinks[0]} />
          </div>
        );
        //TODO add the overall winery rating under h1
        //TODO add the drink types
    }
}


const mapStateToProps = state => ({
  // location: state.dbData.locations.//take var endpoint and
                                   //find id: ??? in locations array
  location: state.dbData.locations[0]
});

export default connect(mapStateToProps)(WineryPage);
