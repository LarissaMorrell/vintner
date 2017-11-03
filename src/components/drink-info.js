import React from 'react';
import Rating from './rating';

export default function DrinkInfo(props) {

  let drink = props.drink;

  return (
    <div className="info-container">
      <div className="pure-g">

        <div className="pure-u-3-5">
          <h2>{props.companyName}</h2>
          <h3>{drink.name}</h3>
          <Rating rating={drink.rating}/>
          <p>{drink.reviews.length} reviews</p>
        </div>

        <div className="pure-u-2-5">
          <img src={`/media/${drink.type}.png`} alt={`${drink.type} glass`}/>
        </div>
      </div>
    </div>
  );

}
