import React from 'react';
import {connect} from 'react-redux';
import Rating from './rating';

export default class DrinkResult extends React.Component {

    render() {
        console.log(this.props);
        let drink = this.props.drink;

        return (
          <div className="box pure-g">
              <div className="pure-u-2-24">
                <img src={`/media/${this.props.type}.png`} />
            </div>
            <div className="pure-u-8-24">
              <h3>Pinot</h3>
            </div>
            <div className="pure-u-8-24">
              <Rating rating={drink.rating} />
              <p>
                14 reviews
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
