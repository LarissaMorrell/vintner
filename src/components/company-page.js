import React from 'react';
import {connect} from 'react-redux';
import CompanyInfo from './company-info';
import DrinkResult from './drink-result';
import NavPages from './nav-pages';

export class CompanyPage extends React.Component {

  render() {
    let company = this.props.location;

    let drinkList = company.drinks.map((drink, i) =>
        <DrinkResult key={i} drink={drink} />
    );

    //TODO put in dynamic varID for NavPages
    return (
      <div>
        <NavPages title="Find a place" route="/company"/>
        <CompanyInfo company={this.props.location} />
        {drinkList}
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

export default connect(mapStateToProps)(CompanyPage);
