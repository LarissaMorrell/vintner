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
//this page displays one drink and it's description/stats,
//then all of the reviews for THAT drink
    render() {
      let drink = this.props.drink;
      var drinkReviews = drink.reviews.map((review, i) =>
        <div className="box" key={i}>
          <DrinkReview review={review} type={drink.type} />
        </div>
      );
      return (
        <div className="content-container">
          <NavPages title={`Read reviews of this ${drink.type}`}
                    route={`/company/${drink.company._id}`}/>
          <DrinkInfo drink={drink} loggedIn={this.props.loggedIn} />
          {drink.reviews.length > 0 ?
             drinkReviews :
             "Sorry, this drink doesn't have any reviews yet. Be the first to write one!"
          }
        </div>
      );
    }
}

const mapStateToProps = state => ({
  drink: state.APIData.drink,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DrinkReviewsPage);
