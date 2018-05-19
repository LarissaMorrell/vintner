import React from "react";
import { Field, reduxForm, focus } from "redux-form"; //focus
// import DropDownSelect from './drop-down-select';
import Input from "./input";
import RadioGroup from "./radio-group";
import { required, length } from "../validators"; //matches
import { postDrink } from "../actions/drinks";

export class CreateDrinkForm extends React.Component {
  onSubmit(Drink) {
    Drink.company = this.props.company.id;
    this.props.dispatch(postDrink(Drink));
  }

  render() {
    return (
      <div className="box-form">
        <div className="scroll">
          <h2 className="form-title">
            {`Add a drink to ${this.props.company.name}'s menu'`}
          </h2>
          <form
            className="drink-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="name">Name</label>
            <Field
              component={Input}
              type="text"
              name="name"
              placeholder={`Yee Old Brewer's Ale`}
              validate={[required, length({ min: 0, max: 45 })]}
            />
            <label htmlFor="type">Type</label>
            <Field
              component={RadioGroup}
              name="type"
              labels={[
                { value: "wine", labelContent: "Wine" },
                { value: "beer", labelContent: "Beer" },
                { value: "cider", labelContent: "Cider" },
                { value: "mead", labelContent: "Mead" },
                { value: "spirit", labelContent: "Spirit" }
              ]}
            />
            <label htmlFor="description">{`Description provided by establishment:`}</label>
            <Field
              component="textarea"
              name="description"
              placeholder="How does the place describe this beverage?"
              validate={[required, length({ min: 0, max: 800 })]}
            />
            <div className="button-container">
              <button type="submit">Add Drink</button>
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
