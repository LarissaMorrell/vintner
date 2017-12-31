import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Rating from './rating';
import CreateReviewForm from './create-review-form';
import {openModal} from '../actions/modal';
import LoginForm from './login-form';

export class DrinkResult extends React.Component {

  writeReview(drink){
    if(this.props.loggedIn){
      this.props.dispatch(openModal(<CreateReviewForm drink={drink}/>))
    } else {
      this.props.dispatch(openModal(<LoginForm />))
    }
  }

  render() {
    let drink = this.props.drink;
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
            <div className="pure-g">
              <div className="pure-u-2-5">
                <img className="drink-result-responsive" src={`/media/${drink.type}.png`} alt="drink type"/>
              </div>

              <div className="pure-u-3-5 pure-u-sm-1-1">
                <button className="drink-result" onClick={() => this.writeReview(drink)}>Write Review
                </button>
                <button className="drink-result">
                  <Link to={`/drink/${drink.id}`} >Read Reviews</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DrinkResult);
