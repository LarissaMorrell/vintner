import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import DrinkInfo from './drink-info';
import DrinkReview from './drink-review';
import NavPages from './nav-pages';

export class DrinkReviewsPage extends React.Component {

//this page displays one drink and it's description/satats,
//then all of the reviews for THAT drink
    render() {
      let drink = this.props.drink;

      var drinkReviews = drink.reviews.map((review, i) =>
          <DrinkReview key={i} review={review} type={drink.type} />
      );

      //TODO make Route varID dynamic for NavPages
      //TODO fix link route so /drink is not in endpoint
      return (
        <div>
          <NavPages title={`Read reviews of this ${this.props.drink.type}`} route="company/11"/>
          <DrinkInfo companyName={this.props.companyName}
              drink={drink} />
          {drinkReviews}
        </div>
      );
    }
}






//TODO get the winery and drink from the endpoints
const mapStateToProps = state => ({
  companyName:state.dbData.company.name,
  drink: state.dbData.company.drinks[0]
});

export default connect(mapStateToProps)(DrinkReviewsPage);
