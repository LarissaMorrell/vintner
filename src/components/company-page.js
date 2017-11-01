import React from 'react';
import {connect} from 'react-redux';
import CompanyInfo from './company-info';
import DrinkResult from './drink-result';

export class CompanyPage extends React.Component {

  render() {
    let company = this.props.location;
    return (
      <div>
        <CompanyInfo company={this.props.location} />
        {genDrinkList(company.drinks)};
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

export default connect(mapStateToProps)(CompanyPage);
