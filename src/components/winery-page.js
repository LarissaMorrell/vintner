import React from 'react';
import {connect} from 'react-redux';
import PlaceInfo from './place-info';
import DrinkResult from './drink-result';

export class WineryPage extends React.Component {

  render() {
    let winery = this.props.location;
    return (
      <div>
        <PlaceInfo place={this.props.location} />
        {genDrinkList(winery.drinks)};
      </div>
    );
    //TODO add the drink types
  }
}


const mapStateToProps = state => ({
  // location: state.dbData.locations.
  //take var endpoint and find id: ??? in locations array
  location: state.dbData.locations[0]
});

function genDrinkList(drinks){
  let drinkElem = [];
  for (let i=0; i < drinks.length; i++){
    drinkElem.push(
      <DrinkResult key={i} drink={drinks[i]} />
    );
  }
  return drinkElem;
}

export default connect(mapStateToProps)(WineryPage);
