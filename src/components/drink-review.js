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
      <div className="pure-g">
        <div className="pure-u-1-5 col-user-rating">
          <Rating rating={review.rating} />
          <img className="avatar-icon review-avatar" src="/media/avatars/boy1.png" alt="avatar" />
        </div>
        <div className="pure-u-4-5">
          <h3>{review.title}</h3>
          <p>{review.comment}</p>

          <p>Flavors:
            {review.flavors.join(', ')}
          </p>
          <p>
            {`Price: ${reviewPriceString(review.price)}`}
          </p>
          <p>
            {`Did you purchase this ${props.type}?`}
            {review.purchased ? " yes" : " no"}
          </p>
        </div>

      </div>
    </div>
  );
}
