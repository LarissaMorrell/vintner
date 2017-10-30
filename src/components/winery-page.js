import React from 'react';
import Rating from './rating';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

export default class WineryPage extends React.Component {

    // function displayDrinks(){
    //   let drinks = [
    //     {
    //       name: "Pinto Noir",
    //       rating: [true, true, true, true, false],
    //
    //     }
    //   ];
    //
    //   drinks.map(drink => {
    //     <div className="box pure-g">
    //         <div className="pure-u-2-24">
    //           <img src="/media/avatar.png" />
    //       </div>
    //       <div className="pure-u-8-24">
    //         <h3>{drink.name}</h3>
    //       </div>
    //       <div className="pure-u-8-24">
    //         <Rating rating={drink.rating} />
    //         <p>
    //           {drink.rating.length} reviews
    //         </p>
    //       </div>
    //       <div className="pure-u-6">
    //         <button>Write a Review</button>
    //         <button>Read Reviews</button>
    //       </div>
    //     </div>
    //   });
    //   return drinks;
    // }

    render() {
        // let winery = this.props.winery;
        return (
          <div className="box pure-g">
              <div className="pure-u-2-24">
                <img src="/media/avatar.png" />
            </div>
            <div className="pure-u-8-24">
              <h3>Pinot</h3>
            </div>
            <div className="pure-u-8-24">
              <Rating rating={[true,true,false,false,false]} />
              <p>
                14 reviews
              </p>
            </div>
            <div className="pure-u-6">
              <button>Write a Review</button>
              <button>Read Reviews</button>
            </div>
          </div>
        );
        //TODO add the overall winery rating under h1
        //TODO add the drink types
    }
}
// <div>
//   <div className="result-container pure-g">
//     <div className="pure-u-16-24">
//       <h1>Nashoba Valley</h1>
//       <p>16 Mothra Lane</p>
//       <p>Jamestown, MA</p>
//     </div>
//     <div className="pure-u-8-24">
//       <img src="/media/avatar.png" />
//     </div>
//   </div>
//   <div className="drink-list">
//
//   </div>
// </div>
// <h1>winery.name</h1>
// <p>{winery.streetAddress}</p>
// <p>{winery.city}, {winery.state}</p>

// <div className="box pure-g">
//     <div className="pure-u-2-24">
//       <img src="/media/avatar.png" />
//   </div>
//   <div className="pure-u-8-24">
//     <h3>{drink.name}</h3>
//   </div>
//   <div className="pure-u-8-24">
//     <Rating rating={drink.rating} />
//     <p>
//       {drink.rating.length} reviews
//     </p>
//   </div>
//   <div className="pure-u-6">
//     <button>Write a Review</button>
//     <button>Read Reviews</button>
//   </div>
// </div>
