import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import DrinkReview from './drink-review';
import NavPages from './nav-pages';

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
    }

    render() {
      //TODO make this so it is ONLY the reviews for that user
      //generate the drinks the user has written
      let drink = this.props.drink;
      var drinkReviews = drink.reviews.map((review, i) =>
          <DrinkReview key={i} review={review} type={drink.type} />
      );


        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className="dashboard">
              <NavPages title="Read your reviews" route="/"/>
              <div className="user-info-container">
                <img className="profile-avatar" src="/media/avatars/boy1.png" alt="avatar" />
                <h2>
                    {this.props.name}
                </h2>
                <div className="dashboard-username">
                    {this.props.username}
                </div>
              </div>
              <div className="reviews-container">
                  {drinkReviews}
              </div>
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
        protectedData: state.protectedData.data,

        companyName:state.dbData.companies[0].name,
        drink: state.dbData.companies[0].drinks[0]
    };
};

export default connect(mapStateToProps)(Dashboard);
