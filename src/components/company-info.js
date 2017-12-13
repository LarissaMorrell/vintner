import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;
    let hours = this.props.company.hours;

    return (
      <div className="info-container">
        <div className="pure-g">
            <div className="pure-u-7-12">
              <h1>{company.name}</h1>
              <h3 className="biz-address">{company.streetAddress}, {company.city}, {company.state}
              </h3>

              <div className="company-info-reviews-container">
                <div className="reviews-container">
                  <Rating rating={company.rating} />
                  <div className="review-count">
                    {genReviewCount(company.totalReviewCount)}
                  </div>
                </div>
                <DrinkTypes types={company.types} />
              </div>

              <h3>Hours of Operation:</h3>
              <table className="table-simple">
                <tbody>
                  {genHours(hours)}
                </tbody>
              </table>
            </div>
            <div className="pure-u-5-12">
              <img className="company" src={company.imageUrl} alt="company"/>
            </div>
        </div>
      </div>
    );
  }
}

function genReviewCount(count){
  if(count === 1){
    return `${count} review`;
  }
  return `${count} reviews`;
}


function genHours(hours){
  let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return hours.map((hours, i) => {
    return (
      <tr key={i}>
        <th className="day-of-the-week">
          {dayOfWeek[i]}
        </th>
        <td className="biz-hours">
          {hours}
        </td>
      </tr>
    )
  })
}
