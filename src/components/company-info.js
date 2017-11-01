import React from 'react';
import Rating from './rating';
import DrinkTypes from './drink-types';

export default class CompanyInfo extends React.Component {

  render(){
    let company = this.props.company;
    return (
      <div>
        <h1>{company.name}</h1>
        <p>{company.streetAddress}<br/>
            {company.city}, {company.state}
        </p>
        <div>
          <Rating rating={company.rating} />
          <p>{company.totalReviewCount} reviews</p>
        </div>
        <div>
          {genDrinkTypes(company.types)}
        </div>
        <img src={`/media/${company.image}`}/>
        <p>Hours: </p>
          <ul>
            {hours(company.hours)}
          </ul>
      </div>
    );
  }
}
// <DrinkTypes types={company.types} />
function genDrinkTypes(types){
  let typeElems = [];
  for(let i = 0; i < types.length; i++){
    typeElems.push(<img src={`/media/${types[i]}.png`}/>)
  }
  return typeElems;
}
//{genDrinkTypes(company.types)}
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
