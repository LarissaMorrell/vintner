import React from 'react';
import {Field, reduxForm} from 'redux-form'; //focus
import DropDownSelect from './drop-down-select';
import Input from './input';
import {required, length, isTrimmed} from '../validators'; //matches

export class CreateReviewForm extends React.Component {
    onSubmit(values) {
      //...
    }
    // function checkboxes(drinkType){
    //   if(drinkType === "wine"){
    //     let flavors = ["Dry", "Semi-Dry", "Sweet", "Dessert Wine",
    //           "Fruity", "Buttery", "Full-Bodied", "Floral"];
    //     return (
    //       flavors.map(flavor =>
    //         <Field name={flavor} id={flavor} component="input" type="checkbox" />
    //       )
    //     );
    //   }
    //   return;
    // }

    //TODO pass in type of alcohol using props
    render() {
        return (
            <form
                className="review-form box box-form"
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values))}>
                <label htmlFor="title">What would you like to call your review?</label>
                <Field
                  component={Input}
                  type="text"
                  name="title"
                  placeholder={`This ${this.props.type} tickles my fancy...`}
                  validate={[required, length({min: 0, max: 150}), isTrimmed]}/>
                <label htmlFor="comments">{`What did you think of this ${this.props.type}?`}</label>
                <Field
                  component="textarea"
                  name="comments"
                  placeholder="Your review helps others make happy hour even better."
                  validate={[required, length({min: 0, max: 800}), isTrimmed]} />
                <label htmlFor="priceDropDown">{`Rate the price of this ${this.props.type}.`}</label>
                <Field
                  name="priceDropDown"
                  label="priceDropDown"
                  component={DropDownSelect}
                  options={["$", "$$", "$$$", "$$$$"]}
                  className="form-control"
                >
                  {DropDownSelect}
                </Field>
                <label htmlFor="purchaseDropDown">{`Did you purchase this ${this.props.type}?`}</label>
                <Field
                  name="purchaseDropDown"
                  label="purchaseDropDown"
                  component={DropDownSelect}
                  options={["Yes", "No"]}
                  className="form-control"
                >
                  {DropDownSelect}
                </Field>
                <button
                    type="submit">
                    Add your Review
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(CreateReviewForm);
