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
            <img className="company-result pure-img" src={`/media/companies/${company.imageUrl}`} alt="company" />
          </Link>
        </div>
        <div className="pure-u-lg-14-24 pure-u-md-12-24 pure-u-sm-16-24">
          {/* TODO fix this */}
          <div className="company-result-title">
            <Link to={`/company/${company.id}`}>{company.name}</Link>
          </div>
          <p className="company-address">
            {company.streetAddress}<br/>
            {company.city}, {company.state}
          </p>

        </div>
        <div className="pure-u-lg-5-24 pure-u-md-6-24 pure-u-sm-1-1 rating-type-container">
          <Rating rating={company.rating} />
          <span className="review-count">
            {`${company.totalReviewCount ? company.totalReviewCount : '0'} reviews`}
          </span>
          <DrinkTypes types={company.types} />
        </div>
      </div>
    );
}
