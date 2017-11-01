import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export function CompanyResult(props) {
    const company = props.company;
    console.log(<DrinkTypes types={company.types} />);
    return (
      <div className="result-container box pure-g">
        <img className="pure-u-1-4" src={`/media/${props.company.image}`} />
        <div className="pure-u-1-2">
          <h3>{company.name}</h3>
          <p>{company.streetAddress}</p>
          <p>{company.city}, {company.state}</p>
        </div>
        <div className="pure-u-1-4">
          <Rating rating={company.rating} />
          <DrinkTypes types={company.types} />
        </div>
      </div>
    );
}
