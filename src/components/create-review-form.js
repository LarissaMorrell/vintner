import React from 'react';
import {Field, reduxForm, focus} from 'redux-form'; //focus
import DropDownSelect from './drop-down-select';
import Input from './input';
import CheckboxGroup from './checkbox-group';
import {required, length, isTrimmed} from '../validators'; //matches
import {postReview} from '../actions/reviews';

export class CreateReviewForm extends React.Component {
    onSubmit(review) {
      review.drink = this.props.drink.id;
      this.props.dispatch(postReview(review));
    }

    render() {
      let drinkType = this.props.drink.type;

        return (
            <div className="box-form">
              <div className="scroll">
                <h2 className="form-title">
                  Write a review for
                  <br/>
                  {this.props.drink.name}
                </h2>
                <form
                    className="review-form"
                    onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values))}>
                    <label htmlFor="title">What would you like to call your review?</label>
                    <Field
                      component={Input}
                      type="text"
                      name="title"
                      placeholder={`This ${drinkType} tickles my fancy...`}
                      validate={[required, length({min: 0, max: 150}), isTrimmed]}/>
                    <label htmlFor="comments">{`What did you think of this ${drinkType}?`}</label>
                    <Field
                      component="textarea"
                      name="comment"
                      placeholder="Your review helps others make happy hour even better."
                      validate={[required, length({min: 0, max: 800}), isTrimmed]} />
                    <label htmlFor="rating">{`How many stars would you rate this ${drinkType}?`}</label>
                    <Field
                      name="rating"
                      label="rating"
                      component={DropDownSelect}
                      options={["*", "**", "***", "****", "*****"]}
                      values={[1,2,3,4,5]}
                      className="form-control"
                    >
                    </Field>
                    <label htmlFor="price">{`How reasonable is the price of this ${drinkType}?`}</label>
                    <Field
                      name="price"
                      label="price"
                      component={DropDownSelect}
                      options={["$", "$$", "$$$", "$$$$"]}
                      values={[1,2,3,4]}
                      className="form-control"
                    >
                    </Field>
                    <label htmlFor="purchased">{`Did you purchase this ${drinkType}?`}</label>
                    <Field
                      name="purchased"
                      label="purchased"
                      component={DropDownSelect}
                      options={["Yes", "No"]}
                      values={[true, false]}
                      className="form-control"
                    >
                    </Field>
                    <Field
                      name="flavors"
                      component={CheckboxGroup}
                      options={flavorList(drinkType)}
                    />
                    <div className="button-container">
                      <button
                          type="submit">
                          Create Review
                      </button>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

function flavorList(drinkType){
  let wineFlavorList = [
    {id: 1, name: 'Dry'},
    {id: 2, name: 'Semi-Dry'},
    {id: 3, name: 'Sweet'},
    {id: 4, name: 'Dessert Wine'},
    {id: 5, name: 'Fruity'},
    {id: 6, name: 'Buttery'},
    {id: 7, name: 'Full-Bodied'},
    {id: 8, name: 'Floral'}
  ];
  let beerFlavorList = [
    {id: 1, name: 'Hoppy'},
    {id: 2, name: 'Malty'},
    {id: 3, name: 'Smokey'},
    {id: 4, name: 'Citrus'},
    {id: 5, name: 'Sour'},
    {id: 6, name: 'Fruity'},
    {id: 7, name: 'Sweet'},
    {id: 8, name: 'Earthy'}
  ];
  let spiritFlavorList = [
    {id: 1, name: 'Bold'},
    {id: 2, name: 'Fun-to-Drink'},
    {id: 3, name: 'Refreshing'},
    {id: 4, name: 'Robust'},
    {id: 5, name: 'Balanced'},
    {id: 6, name: 'Aromatic'},
    {id: 7, name: 'Strong'},
    {id: 8, name: 'Sweet'}
  ];
  if(drinkType === 'wine' || drinkType === 'mead'){
    return wineFlavorList;
  }
  else if(drinkType === 'beer'){
    return beerFlavorList;
  }
  else if(drinkType === 'spirit'){
    return spiritFlavorList;
  }
}


export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(CreateReviewForm);
