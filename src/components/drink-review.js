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
    <div >
      <div className="pure-g">
        <div className="pure-u-1-5 col-user-rating center-horizontal">
          <Rating rating={review.rating} />
          <img className="avatar-icon" src="/media/avatars/boy1.png" alt="avatar" />
          <div>
            {props.user.username}
          </div>
        </div>
        <div className="pure-u-4-5 padding-left">
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
