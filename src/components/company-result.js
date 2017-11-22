import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './rating';
import DrinkTypes from './drink-types';
import {viewCompany} from '../actions/companies';

export function CompanyResult(props) {
    const company = props.company;

    return (
      <div className="result-container box pure-g">
        <div className="pure-u-1-4 biz-img-container">
          <Link to={`/company/${company.id}`}>
            <img className="company-result" src={`/media/${props.company.image}`} alt="company" />
          </Link>
        </div>
        <div className="pure-u-1-2">
          <Link to={`/company/${company.id}`}>{company.name}</Link>
          <p>{company.streetAddress}</p>
          <p>{company.city}, {company.state}</p>
          <div className="type-icons">
            <DrinkTypes types={company.types} />
          </div>
        </div>
        <div className="pure-u-1-4">
          <Rating rating={company.rating} />
          <div className="review-count">
            {`${company.totalReviewCount} reviews`}
          </div>
        </div>
      </div>
    );
}
