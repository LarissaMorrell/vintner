import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import DrinkInfo from './drink-info';
import DrinkReview from './drink-review';

export class DrinkReviewsPage extends React.Component {

//this page displays one drink and it's description/satats,
//then all of the reviews for THAT drink
    render() {
      let drink = this.props.drink;

      var drinkReviews = drink.reviews.map((review, i) =>
          <DrinkReview key={i} review={review} type={drink.type} />
      );

      return (
        <div>Drink Reviews Page
          <DrinkInfo companyName={this.props.companyName}
              drink={drink} />
          {drinkReviews}
        </div>
      );
    }
}






//TODO get the winery and drink from the endpoints
const mapStateToProps = state => ({
  companyName:state.dbData.locations[0].name,
  drink: state.dbData.locations[0].drinks[0]
});

export default connect(mapStateToProps)(DrinkReviewsPage);
