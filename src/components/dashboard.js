import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchUser} from '../actions/users';
import DrinkReview from './drink-review';
// import ReactLoading from 'react-loading';

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchUser());
    }

    render() {
      // Dashboard is only visible to logged in users
      if (!this.props.loggedIn) {
          return <Redirect to="/" />;
      }
      let user = this.props.user;

      //TODO add spinner so undefined user does not display
      // console.log(Object.getOwnPropertyDescriptor(user, 'username'));
      // if(!(Object.getOwnPropertyDescriptor(user, 'username'))){
      // if(!(user.username === undefined)){
      //   console.log(user.username);
      //   return(
      //     <ReactLoading id="loading" className="center-horizontal" type="spin" color="#491722"/>
      //   );
      // }


      let reviews = this.props.user.reviews;
      let drinkReviews;

      if(reviews.length > 1){
        drinkReviews = reviews.map((review, i) =>
          <div className="box result-container" key={i}>
            <div className="pure-g">
              <div className="pure-u-sm-18-24  pure-u-1-1 sm-screen-center-horizontal">
                <h1>{review.drink.name}</h1>
              </div>
              <div className="pure-u-sm-6-24 pure-u-1-1">
                <Link to={`/drink/${review.drink._id}`}>
                  <button className="visit-drink-button">
                    Visit Drink
                  </button>
                </Link>
              </div>
              <div className="pure-u-1-1">
                <DrinkReview review={review} type={review.drink.type} drinkId={review.drink._id} user={this.props.user}/>
              </div>
            </div>
          </div>
        );
      } else {
        drinkReviews = <div className="result-container">You have not written any reviews yet.</div>
      }
      return (
          <div className="content-container">
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
