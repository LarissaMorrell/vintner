import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './rating';
import DrinkTypes from './drink-types';

export function CompanyResult(props) {
    const company = props.company;
    return (
      <div className="result-container box pure-g">
        <div className="pure-u-1-4 biz-img-container">
          <Link className="biz-result-title" to={`/company/${company.id}`}>
            <img className="company-result pure-img" src={`/media/${props.company.imageUrl}`} alt="company" />
          </Link>
        </div>
        <div className="pure-u-1-2 pure-u-sm-3-4">
          {/* TODO fix this */}
          <Link className="asd" to={`/company/${company.id}`}>{company.name}</Link>
          <p>{company.streetAddress}</p>
          <p>{company.city}, {company.state}</p>
          <div className="type-icons">
            <DrinkTypes types={company.types} />
          </div>
        </div>
        <div className="pure-u-1-4 pure-u-sm-1-1">
          <Rating rating={company.rating} />
          <div className="review-count">
            {`${company.totalReviewCount} reviews`}
          </div>
        </div>
      </div>
    );
}
