import React from 'react';
import Rating from './rating';

export default function DrinkInfo(props) {

  let drink = props.drink;

  return (
    <div className="info-container">
      <div className="pure-g">

        <div className="pure-u-4-5">
          <h1 id="drink-info-title">{drink.name}</h1>
            <Rating rating={drink.rating}/> {drink.reviews.length} reviews
          <h3>{props.companyName}</h3>
        </div>

        <div className="pure-u-1-5">
          <img src={`/media/${drink.type}.png`} id="drink-info" alt={`${drink.type} glass`}/>
        </div>
      </div>
    </div>
  );

}
