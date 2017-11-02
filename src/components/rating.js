import React from 'react';

export default function Rating(props) {

    function genStarRating(rating){
      let starRating = [];
      for(let i = 0; i < 5; i++){
        if(i < rating){
          starRating.push(<span className="fa fa-star fa-lg checked" key={i}></span>);
        } else {
          starRating.push(<span className="fa fa-star fa-lg unchecked" key={i}></span>);
        }
      };
      return starRating;
    }

    return (
      <div>Rating: {genStarRating(props.rating)}</div>
    );
}
