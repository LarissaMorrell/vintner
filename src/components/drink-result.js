import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Rating from './rating';
import CreateReviewForm from './create-review-form';
import {openModal} from '../actions/modal';

export class DrinkResult extends React.Component {

  render() {
    let drink = this.props.drink;
    // let x = [...new Set(drink.reviews.map(review => review.flavors))];
    return (
      <div className="box result-container">
          <img className="drink-result" src={`/media/${drink.type}.png`} alt="drink type"/>
          <div className="pure-g drink-result">
          <div className="pure-u-1-1 pure-u-md-3-5">
            <div className="result-title">
              <Link to={`/drink/${drink.id}`}>{drink.name}</Link>
            </div>
            <p className="result-details">{drink.description}</p>
          </div>
          <div className="pure-u-1-1 pure-u-md-1-5">
            <Rating rating={drink.rating} />
            <div className="review-count">
              {drink.reviews.length} reviews
            </div>
          </div>
          <div className="pure-u-1-1 pure-u-md-1-5">
            <button className="drink-result" onClick={() => this.props.dispatch(openModal(
              <CreateReviewForm drink={drink}/>))}>Write Review
            </button>
            <button className="drink-result">
              <Link to={`/drink/${drink.id}`} >Read Reviews</Link>
            </button>
          </div>
        </div>
      </div>
    )
      //TODO add the overall winery rating under h1
      //TODO add the drink types
  }
}
export default connect()(DrinkResult);

// <p>
//   {`People thought this ${drink.type} tasted: ${drink.flavors.join(', ')}`}
// </p>

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
