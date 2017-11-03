import React from 'react';
import Rating from './rating';

export default function DrinkReview(props) {
  let review = props.review;

  function reviewPriceString(price){
    let priceStr = "";

    for(let i=0; i < price; i++){
      priceStr = priceStr.concat("$");
    }
    return priceStr;
  }

  return (
    <div className="box result-container">
      <Rating rating={review.rating} />
      <h3>{review.title}</h3>

      <div className="pure-g">
        <div className="pure-u-4-5">
          <p>{review.comments}</p>
          <p>Flavors: {review.flavors.join(', ')}</p>
          <p>{`Did you purchase this ${props.type}? ${review.purchased}`}</p>
          <p>{`Price: ${reviewPriceString(review.price)}`}</p>
        </div>

        <div className="pure-u-1-5">
          <img className="avatar-icon" src="/media/avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
