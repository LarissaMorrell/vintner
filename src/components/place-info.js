import React from 'react';
import Rating from './rating';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

export default class LocationInfo extends React.Component {

  render(){
    let place = this.props.place;
    return (
      <div>
        <h1>{place.name}</h1>
        <p>{place.streetAddress}<br/>
            {place.city}, {place.state}
        </p>
        <div>
          <Rating rating={place.rating} />
          <p>{place.totalReviewCount} reviews</p>
        </div>
        <img src={`/media/${place.image}`}/>
        <p>Hours: </p>
          <ul>
            {hours(place.hours)}
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
