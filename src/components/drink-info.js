import React from 'react';
import {connect} from 'react-redux';
import Rating from './rating';
import CreateReviewForm from './create-review-form';
import {openModal} from '../actions/modal';

export class DrinkInfo extends React.Component {

  render() {
    let drink = this.props.drink;

    return (
      <div className="info-container drink-info-container">
        <div className="pure-g">
          <div className="pure-u-1-5">
            <img src={`/media/${drink.type}.png`} id="drink-info-img" alt={`${drink.type} glass`}/>
          </div>

          <div className="pure-u-3-5">
            <h1 id="drink-info-title">{drink.name}</h1>
              <Rating rating={drink.rating}/> {drink.reviews.length} reviews
            <h3>{this.props.companyName}</h3>
          </div>
          <div className="pure-u-1-5">
            <button onClick={() => this.props.dispatch(openModal(<CreateReviewForm drink={this.props.drink} />))}>
              Write Review
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default connect()(DrinkInfo);
