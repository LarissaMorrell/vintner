import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export function CompanyResult(props) {
    const company = props.company;

    return (
      <div className="result-container box pure-g">
        <div className="pure-u-1-4 biz-img-container">
          <img className="company-result" src={`/media/${props.company.image}`} alt="company" />
        </div>
        <div className="pure-u-1-2">
          <h3>{company.name}</h3>
          <p>{company.streetAddress}</p>
          <p>{company.city}, {company.state}</p>
        </div>
        <div className="pure-u-1-4">
          <Rating rating={company.rating} />
          {`${company.totalReviewCount} reviews`}
          <DrinkTypes types={company.types} />
        </div>
      </div>
    );
}
