import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;
    console.log("info -> ", this.props.company);

    return (
      <div className="info-container">
        <div className="pure-g">
            <div className="pure-u-7-12">
              <h1>{company.name}</h1>
              <h3 className="biz-address">{company.streetAddress}, {company.city}, {company.state}
              </h3>

              <div className="pure-g">
                <div className="pure-u-1-2">
                  <Rating className="" rating={company.rating} />
                  {company.totalReviewCount} reviews
                </div>
                <div className="pure-u-1-2">
                  <DrinkTypes types={company.types} />
                </div>
              </div>

              <h3>Hours:</h3>
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
