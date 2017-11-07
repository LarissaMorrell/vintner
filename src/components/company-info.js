import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;

    return (
      <div className="info-container">
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
              <p>Hours:</p>
              <table className="table-simple hours-table">
                <tbody>
                  {genHours(company.hours)}
                </tbody>
              </table>
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
      <li key={i}>
        {hour}
      </li>
  );
}

function generateHours(hours){
  let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return hours.map((hour, i) => {
    return(
      <div className="pure-g">
        <div className="pure-u-1-5">
          {dayOfWeek[i]}
        </div>
        <div className="pure-u-4-5">
          {hour}
        </div>
      </div>
    )
  })
}

function genHours(hours){
  let dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  return hours.map((hour, i) => {
    return(
      <tr key={i}>
        <th className="side-bar">
          {dayOfWeek[i]}
        </th>
        <td className="biz-hours">
          {hour}
        </td>
      </tr>
    )
  })
}
