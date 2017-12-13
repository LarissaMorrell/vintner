import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './rating';
import DrinkTypes from './drink-types';

export function CompanyResult(props) {
    const company = props.company;
    return (
      <div className="result-container box pure-g">
        <div className="pure-u-6-24 biz-img-container">
          <Link to={`/company/${company.id}`}>
            <img className="company-result pure-img" src={company.imageUrl} alt="company" />
          </Link>
        </div>
        <div className="pure-u-md-12-24 pure-u-sm-16-24">
          {/* TODO fix this */}
          <div className="result-title">
            <Link to={`/company/${company.id}`}>{company.name}</Link>
          </div>
          <p className="company-address">
            {company.streetAddress}<br/>
            {company.city}, {company.state}
          </p>

        </div>
        <div className="pure-u-md-6-24 pure-u-sm-1-1">
          <Rating rating={company.rating} />
          <div className="review-count">
            {genDrinksAvailableString(company.drinks.length)}
          </div>
          <DrinkTypes types={company.types} />
        </div>
      </div>
    );
}

function genDrinksAvailableString(count){
  if(count === 1){
    return `${count} drink available`;
  }
  return `${count} drinks available`;
}
