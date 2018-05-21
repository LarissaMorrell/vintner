import React from "react";
import { Field, reduxForm, focus } from "redux-form"; //focus
import DropDownSelect from "./drop-down-select";
import Input from "./input";
import CheckboxGroups from "./checkbox-groups";
import { required, length } from "../validators"; //matches
import { postReview } from "../actions/reviews";

export class CreateCompanyForm extends React.Component {
  onSubmit(review) {
    review.drink = this.props.drink.id;
    this.props.dispatch(postReview(review));
  }

  render() {
    return (
      <div className="box-form">
        <div className="scroll">
          <h2 className="form-title">Create a new company</h2>
          <form
            className="company-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            <label htmlFor="name">Company Name</label>
            <Field
              component={Input}
              type="text"
              name="name"
              placeholder={`Sam Adams Brewery`}
              validate={[required, length({ min: 0, max: 50 })]}
            />
            <label htmlFor="streetAddress">Address</label>
            <Field
              component={Input}
              type="text"
              name="streetAddress"
              placeholder={`65 Hopps Road`}
              validate={[required, length({ min: 0, max: 50 })]}
            />
            <label htmlFor="city">City</label>
            <Field
              component={Input}
              type="text"
              name="city"
              placeholder={`Huntsville`}
              validate={[required, length({ min: 0, max: 50 })]}
            />
            <label htmlFor="state">{`State`}</label>
            <Field
              name="state"
              label="state"
              component={DropDownSelect}
              options={["ME", "MA", "NH", "NY", "RI", "VT"]}
              values={["ME", "MA", "NH", "NY", "RI", "VT"]}
              className="form-control"
            />
            <Field
              name="type"
              component={CheckboxGroups}
              options={[
                { value: "wine", label: "Wine" },
                { value: "beer", label: "Beer" },
                { value: "cider", label: "Cider" },
                { value: "mead", label: "Mead" },
                { value: "spirit", label: "Spirits" }
              ]}
            />
            <div className="button-container">
              <button type="submit">Create Company</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "company",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("company", Object.keys(errors)[0]))
})(CreateCompanyForm);
