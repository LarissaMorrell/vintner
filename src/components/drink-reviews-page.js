import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import DrinkInfo from './drink-info';
import DrinkReview from './drink-review';

export class DrinkReviewsPage extends React.Component {

    render() {
      let company = this.props.company;

      // var reviews = company.map((review, i) =>
      //     <DrinkReview key={i} company={company} />
      // );

      return (
        <div>Drink Reviews Page
          <DrinkInfo companyName={company.name}
              drink={company.drinks[0]} />

          <DrinkReview review={company.drinks[0].reviews[0]}
                type={company.drinks[0].type}/>
        </div>
      );
    }
}

//TODO get the winery and drink from the endpoints
const mapStateToProps = state => ({
  company: state.dbData.locations[0]
});

export default connect(mapStateToProps)(DrinkReviewsPage);
