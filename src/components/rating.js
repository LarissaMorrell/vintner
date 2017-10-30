import React from 'react';

export default function Rating(props) {

    function genStarRating(rating){
      let starRating = [];
      rating.map((star, index) => {
        if(star){
          starRating.push(<span className="fa fa-star checked" key={index}></span>);
        } else {
          starRating.push(<span className="fa fa-star unchecked" key={index}></span>);
        }
      });
      return starRating;
    }

    return (
      <div>Rating: {genStarRating(props.rating)}</div>
    );
}
