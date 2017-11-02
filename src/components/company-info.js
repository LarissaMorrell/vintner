import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;

    return (
      <div className="box info-container">
        <div className="pure-g">
            <div className="pure-u-7-12">
              <h1>{company.name}</h1>
              <p>{company.streetAddress}<br/>
                  {company.city}, {company.state}
              </p>
              <DrinkTypes types={company.types} />
              <div>
                <Rating rating={company.rating} />
                {company.totalReviewCount} reviews
              </div>


              <p>Hours: </p>
              <ul>
                {hours(company.hours)}
              </ul>
            </div>
            <div className="pure-u-5-12">
              <img className="company" src={`/media/${company.image}`} alt="company"/>
            </div>
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
