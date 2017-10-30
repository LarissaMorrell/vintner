import React from 'react';
import Rating from './rating';

export function LocationResult(props) {
    const winery = props.winery;
    return (
      <div className="result-container box pure-g">
        <img className="pure-u-1-4" src="/media/avatar.png" />
        <div className="pure-u-1-2">
          <h3>{winery.name}</h3>
          <p>{winery.streetAddress}</p>
          <p>{winery.city}, {winery.state}</p>
        </div>
        <div className="pure-u-1-4">
          <Rating rating={winery.rating} />
        </div>
      </div>
    );
}
