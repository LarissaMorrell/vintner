import React from 'react';
import {connect} from 'react-redux';
import DrinkInfo from './drink-info';
import DrinkReview from './drink-review';
import NavPages from './nav-pages';
import {getDrink} from '../actions/drinks';

export class DrinkReviewsPage extends React.Component {

    componentDidMount(){
      this.props.dispatch(getDrink(this.props.match.params.drinkId))
    }
//this page displays one drink and it's description/satats,
//then all of the reviews for THAT drink
    render() {
      let drink = this.props.drink;
      var drinkReviews = drink.reviews.map((review, i) =>
          <DrinkReview key={i} review={review} type={drink.type} />
      );
      console.log("drink", drink);
      return (
        <div className="content-container">
          <NavPages title={`Read reviews of this ${drink.type}`}
                    route={`/company/${drink.company._id}`}/>
          <DrinkInfo drink={drink} />
          {drinkReviews}
        </div>
      );
    }
}
    // {drinkReviews}

const mapStateToProps = state => ({
  drink: state.APIData.drink
});

export default connect(mapStateToProps)(DrinkReviewsPage);
