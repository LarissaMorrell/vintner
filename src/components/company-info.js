import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;

    return (
      <div className="box pure-g">
        <div className="pure-u-7-12">
          <h1>{company.name}</h1>
          <DrinkTypes types={company.types} />
          <Rating rating={company.rating} />
          <p>{company.totalReviewCount} reviews</p>
          <p>{company.streetAddress}<br/>
              {company.city}, {company.state}
          </p>
          <p>Hours: </p>
          <ul>
            {hours(company.hours)}
          </ul>
        </div>
        <div className="pure-u-5-12">
          <img className="company" src={`/media/${company.image}`} alt="company"/>
        </div>
      </div>
    );
  }
}

function hours(hours){
  return hours.map((hour, i) =>
      <li key={i}>{hour}</li>
  );
}
