import React from 'react';
import Rating from './rating';

export default class DrinkResult extends React.Component {

  render() {
      let drink = this.props.drink;
      // let x = [...new Set(drink.reviews.map(review => review.flavors))];
      // console.log(x);
      return (
        <div className="box result-container">
          <div className="pure-g">
              <div className="pure-u-1-5">
                <img src={`/media/${drink.type}.png`} alt="drink type" />
            </div>
            <div className="pure-u-2-5">
              <h3>{drink.name}</h3>
              <p>{`People thought this ${drink.type} tasted:`}<br/>

              </p>
            </div>
            <div className="pure-u-1-5">
              <Rating rating={drink.rating} />
              <p>
                {drink.reviews.length} reviews
              </p>
            </div>
            <div className="pure-u-1-5">
              <button>Write Review</button>
              <button>Read Reviews</button>
            </div>
          </div>
        </div>
      );
      //TODO add the overall winery rating under h1
      //TODO add the drink types
    }
}
//{popularFlavors(drink.reviews)}
// function popularFlavors(reviews){
  //extract all the flavor arrays from each review
  //put the flavors into one array
  //sort the arrays
  //take out repeat flavors

//   let flavors = reviews.map(review => review.flavors);
//   console.log("flavors", flavors);
//   let sortedFlavors = ...flavors.slice().sort();
//   console.log("sorted flavors", sortedFlavors);
//   let popFlav = [];
//
//   for (var i = 0; i < sortedFlavors.length - 1; i++) {
//       if (sortedFlavors[i + 1] === sortedFlavors[i]) {
//           popFlav.push(sortedFlavors[i]);
//       }
//   }
//   return sortedFlavors;
// }
