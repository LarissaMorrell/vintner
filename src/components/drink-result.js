import React from 'react';
import Rating from './rating';

export default class DrinkResult extends React.Component {

  render() {
      let drink = this.props.drink;

      return (
        <div className="box pure-g">
            <div className="pure-u-2-24">
              <img src={`/media/${drink.type}.png`} />
          </div>
          <div className="pure-u-8-24">
            <h3>{drink.name}</h3>
          </div>
          <div className="pure-u-8-24">
            <Rating rating={drink.rating} />
            <p>
              {drink.reviews.length} reviews
            </p>
          </div>
          <div className="pure-u-6">
            <button>Write a Review</button>
            <button>Read Reviews</button>
          </div>
        </div>
      );
      //TODO add the overall winery rating under h1
      //TODO add the drink types
    }
}