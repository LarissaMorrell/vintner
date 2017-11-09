import React from 'react';
import {Field, reduxForm} from 'redux-form'; //focus
import DropDownSelect from './drop-down-select';
import Input from './input';
import CheckboxGroup from './checkbox-group';
import {required, length, isTrimmed} from '../validators'; //matches

export class CreateReviewForm extends React.Component {
    onSubmit(values) {
      console.log(values);
    }


    //TODO pass in type of alcohol using props
    render() {
      let wineFlavorList = [
        {id: 1, name: 'Dry'},
        {id: 2, name: 'Semi-Dry'},
        {id: 3, name: 'Sweet'},
        {id: 4, name: 'Dessert Wine'},
        {id: 5, name: 'Fruity'},
        {id: 6, name: 'Buttery'},
        {id: 7, name: 'Full-Bodied'},
        {id: 8, name: 'Floral'}];

        return (
            <form
                className="review-form box-form"
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values))}>
                <label htmlFor="title">What would you like to call your review?</label>
                <Field
                  component={Input}
                  type="text"
                  name="title"
                  placeholder={`This ${this.props.drink.type} tickles my fancy...`}
                  validate={[required, length({min: 0, max: 150}), isTrimmed]}/>
                <label htmlFor="comments">{`What did you think of this ${this.props.drink.type}?`}</label>
                <Field
                  component="textarea"
                  name="comments"
                  placeholder="Your review helps others make happy hour even better."
                  validate={[required, length({min: 0, max: 800}), isTrimmed]} />
                <label htmlFor="priceDropDown">{`Rate the price of this ${this.props.drink.type}.`}</label>
                <Field
                  name="priceDropDown"
                  label="priceDropDown"
                  component={DropDownSelect}
                  options={["$", "$$", "$$$", "$$$$"]}
                  values={[1,2,3,4]}
                  className="form-control"
                >
                </Field>
                <label htmlFor="purchaseDropDown">{`Did you purchase this ${this.props.drink.type}?`}</label>
                <Field
                  name="purchaseDropDown"
                  label="purchaseDropDown"
                  component={DropDownSelect}
                  options={["Yes", "No"]}
                  values={[true, false]}
                  className="form-control"
                >
                </Field>
                <Field name="flavors" component={CheckboxGroup} options={wineFlavorList} />
                <button
                    type="submit">
                    Add your Review
                </button>
            </form>
        );
    }
}

// function checkboxes(drinkType){
//   console.log(drinkType);
//
//   if(drinkType === "wine"){
//     let flavors = ["Dry", "Semi-Dry", "Sweet", "Dessert Wine",
//           "Fruity", "Buttery", "Full-Bodied", "Floral"];
//     return (
//       flavors.map(flavor => {
//         return (
//           <div>
//             <label htmlFor={flavor}>{flavor}</label>
//             <Field name={flavor} id={flavor} component="input" type="checkbox" />
//           </div>
//         )
//       })
//     );
//   }
//   return <Field  component="input" type="checkbox" />;
// }

export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(CreateReviewForm);
