import React from 'react';
import {connect} from 'react-redux';
import CompanyInfo from './company-info';
import DrinkResult from './drink-result';
import NavPages from './nav-pages';

export class CompanyPage extends React.Component {

  render() {
    let company = this.props.company;

    let drinkList = company.drinks.map((drink, i) =>
        <DrinkResult key={i} drink={drink} />
    );

    //TODO put in dynamic varID for NavPages
    return (
      <div>
        <NavPages title="Find a place" route="/company"/>
        <div className="content-container">
        <CompanyInfo company={this.props.company} />
        {drinkList}
        </div>
      </div>
    );
    //TODO add the drink types
  }
}


const mapStateToProps = state => ({
  //take var endpoint and find id: ??? in companies array
  company: state.dbData.companies[0]
});

export default connect(mapStateToProps)(CompanyPage);
