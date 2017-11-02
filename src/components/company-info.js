import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;

    return (
      <div className="box pure-g">
        <div className="pure-u-3-5">

          <div className="pure-g">
            <h1 className="pure-u-5-5">{company.name}</h1>
            <div className="pure-u-5-5">
              <DrinkTypes types={company.types} />
            </div>
            <div className="pure-u-3-5">
              <Rating rating={company.rating} />
            </div>
            <div className="pure-u-2-5">
              <p>{company.totalReviewCount} reviews</p>
            </div>
          </div>
        </div>

        <div className="pure-u-2-5">
          <img className="company" src={`/media/${company.image}`} alt="company"/>
          <p>{company.streetAddress}<br/>
              {company.city}, {company.state}
          </p>
      </div>
        <p>Hours: </p>
          <ul>
            {hours(company.hours)}
          </ul>
      </div>
    );
  }
}


function hours(hoursArr){
  let hoursOfOperation = [];
  for(let i = 0; i < hoursArr.length; i++){
    hoursOfOperation.push(<li key={i}>{hoursArr[i]}</li>)
  }
  return hoursOfOperation;
}
//why??????????
// hoursArr.map(hour => {
//   hour = <li>{hour}</li>;
// });
