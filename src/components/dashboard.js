import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
//import DrinkReview from './drink-review';
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
      // let drink = this.props.company.drink;
      // var drinkReviews = drink.reviews.map((review, i) =>
      //     <DrinkReview key={i} review={review} type={drink.type} />
      // );


      // Only visible to logged in users
      if (!this.props.loggedIn) {
          return <Redirect to="/" />;
      }
      console.log(this.props.user.reviews);
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
