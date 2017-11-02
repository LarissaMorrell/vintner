import React from 'react';
import Rating from './rating';

export default function DrinkReview(props) {

  let review = props.review;
  console.log(props);
  return (
    <div className="box">
      <Rating rating={review.rating} />
      <h3>{review.title}</h3>
      <div className="pure-g">
        <div className="pure-u-4-5">
          <p>{review.comments}</p>

        </div>
        <div className="pure-u-1-5">
          <img src="/media/avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
