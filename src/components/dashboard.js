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
      // Only visible to logged in users
      if (!this.props.loggedIn) {
          return <Redirect to="/" />;
      }
      let user = this.props.user;
      let reviews = this.props.user.reviews;
      let drinkReviews;

      if(reviews.length > 1){
        drinkReviews = reviews.map((review, i) =>
          <div className="box result-container" key={i}>
            <div className="dashboard-drink-header">
              <h1>{review.drink.name}</h1>
              <button>
                <Link to={`/drink/${review.drink._id}`}>Visit Drink</Link>
              </button>
            </div>

            <DrinkReview review={review} type={review.drink.type} drinkId={review.drink._id} user={this.props.user}/>
          </div>
        );
      }
      return (
          <div className="content-container">
            <NavPages title="" route="/"/>
            <div className="user-info-container">
              <img src={`/media/avatars/${user.avatar}.png`} alt="avatar" />
              <h1>
                  {`${user.firstName} ${user.lastName}`}
              </h1>
              <div>
                  {user.username}
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
        user: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);
