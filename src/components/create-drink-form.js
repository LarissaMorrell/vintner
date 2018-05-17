import React from "react";
import { Field, reduxForm, focus } from "redux-form"; //focus
// import DropDownSelect from './drop-down-select';
import Input from "./input";
// import CheckboxGroup from './checkbox-group';
// import {required, length} from '../validators'; //matches
import { postDrink } from "../actions/drinks";

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
            Create a drink for
            <br />
            {this.props.company.name}
          </h2>
          <form
            className="drink-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="title">
              What would you like to call your review?
            </label>
            <Field
              component={Input}
              type="text"
              name="title"
              placeholder={`This ${drinkType} tickles my fancy...`}
              validate={[required, length({ min: 0, max: 75 })]}
            />
            <div className="button-container">
              <button type="submit">Create Review</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "drink",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("drink", Object.keys(errors)[0]))
})(CreateDrinkForm);
