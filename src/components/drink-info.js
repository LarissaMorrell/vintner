import React from 'react';
import {connect} from 'react-redux';
import Rating from './rating';
import CreateReviewForm from './create-review-form';
import {openModal} from '../actions/modal';

export class DrinkInfo extends React.Component {

  render() {
    let drink = this.props.drink;
    let company = drink.company;

    return (
      <div className="info-container drink-info-container">
        <span className="drink-type-imgs-container">
          <img src={`/media/${drink.type}.png`} alt={`${drink.type} glass`}/>
        </span>
        <div className="pure-g">
          <div className="pure-u-18-24">
            <h1 id="drink-info-title">{drink.name}</h1>
            <h3>{company.name}</h3>
            <p>{company.streetAddress}, {company.city}, {company.state}</p>
          </div>
          <div className="pure-u-lg-5-24 pure-u-md-6-24 pure-u-1-1 rating-type-container">
            <Rating rating={company.rating} />
            <span className="review-count">
              {`${company.totalReviewCount ? company.totalReviewCount : '0'} reviews`}
            </span>
            <button className="inline" onClick={() => this.props.dispatch(openModal(
                <CreateReviewForm drink={this.props.drink} loggedIn={this.props.loggedIn}/>
            ))}>
              Write Review
            </button>
          </div>
        </div>
      </div>
    );
  }
}




// function drinkRating(reviews){
//   let avgRating = 0;
//   reviews.rating.forEach(rating => {
//
//   })
// }

export default connect()(DrinkInfo);
