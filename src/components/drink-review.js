import React from 'react';
import Rating from './rating';
import {Link} from 'react-router-dom';
export default function DrinkReview(props) {
  let review = props.review;

  function reviewPriceString(price){
    let priceStr = "";

    for(let i=0; i < price; i++){
      priceStr = priceStr.concat("$");
    }
    return priceStr;
  }
  console.log("props", props);
  return (
    <div className="result-container">
      <div className="pure-g">
        <div className="pure-u-1-5 col-user-rating">
          <Rating rating={review.rating} />
          <img className="avatar-icon review-avatar" src="/media/avatars/boy1.png" alt="avatar" />
          <div>
            {props.user.username}
          </div>
        </div>
        <div className="pure-u-4-5">
          <div className="result-title">
            <h3>{review.title}</h3>
          </div>
          <p>{review.comment}</p>
          <ul>
            <li><span>Flavors:</span> {review.flavors.join(', ')}</li>
            <li><span>Price:</span> {reviewPriceString(review.price)}</li>
            <li>
              <span>{`Did you purchase this ${props.type}?`}</span>
              {review.purchased ? " yes" : " no"}
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
