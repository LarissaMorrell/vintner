import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import CreateReviewForm from './create-review-form';

  // If we are not logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  // if (!props.loggedIn) {
  //     return <Redirect to="/" />;
  // }
export function CreateReviewPage(props) {

    return (
      <div>
        <p>hi</p>
        <CreateReviewForm />
      </div>
    );

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateReviewPage);
