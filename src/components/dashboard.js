import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchUser} from '../actions/users';
import DrinkReview from './drink-review';
import NavPages from './nav-pages';

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchUser());
    }

    render() {
      console.log("props for dashboard", this.props);
      // Only visible to logged in users
      if (!this.props.loggedIn) {
          return <Redirect to="/" />;
      }
      let reviews = this.props.user.reviews;
      let drinkReviews;

      if(reviews.length > 1){
        drinkReviews = reviews.map((review, i) =>
          <div className="box" key={i}>
            <h1>{review.drink.name}</h1>
            <button>
              <Link to={`/drink/${review.drink._id}`}>Visit Drink</Link>
            </button>
            <DrinkReview review={review} type={review.drink.type} drinkId={review.drink._id} user={this.props.user}/>
          </div>
        );
      }

      return (
          <div className="content-container">
            <NavPages title="" route="/"/>
            <div className="user-info-container">
              <img src="/media/avatars/boy1.png" alt="avatar" />
              <h1>
                  {this.props.name}
              </h1>
              <div>
                  {this.props.username}
              </div>
            </div>
            {drinkReviews}
          </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? state.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        user: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);
