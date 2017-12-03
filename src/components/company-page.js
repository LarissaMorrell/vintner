import React from 'react';
import {connect} from 'react-redux';
import CompanyInfo from './company-info';
import DrinkResult from './drink-result';
import NavPages from './nav-pages';
import {getCompany} from '../actions/companies';


export class CompanyPage extends React.Component {

  componentDidMount(){
    this.props.dispatch(getCompany(this.props.match.params.companyId))
  }

  render() {
    // console.log(this.props.company.drinks);
    // let drinkList = this.props.company.drinks.map((drink, i) =>
    //    <DrinkResult key={i} drink={drink} />
    // );
    // let drinkList = <DrinkResult drink={this.props.company.drinks[0]} />;

    let drinkList = [];
    let drinks = this.props.company.drinks;
    // console.log("drinks", drinks);
    for (let i=0; i<drinks.length; i++){
      drinkList.push(<DrinkResult key={i} drink={drinks[i]} />);
    }
    return (
      <div className="content-container">
        <NavPages title="Find a place" route="/companies"/>
        <CompanyInfo company={this.props.company} />
        {drinkList}
      </div>
    );

    //TODO add the drink types
  }
}


const mapStateToProps = state => ({
  company: state.APIData.company,
});

export default connect(mapStateToProps)(CompanyPage);
