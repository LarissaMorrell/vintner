import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../actions/users";
import { login } from "../actions/auth";
import Input from "./input";
import RadioImgGroup from "./radio-img-group";
import { required, nonEmpty, matches, length, isTrimmed } from "../validators";

//for the link to the login page. Open login modal on redirect to dashboard
import LoginForm from "./login-form";
import DemoButton from "./demo-button";
import { openModal } from "../actions/modal";

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName, avatar } = values;
    const user = { username, password, firstName, lastName, avatar };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div>
        <h2 className="form-title">Create your account</h2>
        <form
          id="registration-form"
          className="box-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <Field
            component={Input}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <Field
            component={Input}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <Field
            component={Input}
            type="text"
            name="username"
            placeholder="Username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="Password"
            validate={[required, length({ min: 8, max: 72 }), isTrimmed]}
          />
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            validate={[required, nonEmpty, matches("password")]}
          />
          <Field
            component={RadioImgGroup}
            name="avatar"
            imgFileNames={[
              "boy1",
              "boy2",
              "boy3",
              "boy4",
              "boy5",
              "boy6",
              "girl1",
              "girl2",
              "girl3",
              "girl4",
              "girl5",
              "girl6"
            ]}
          />
          <div className="button-container">
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
              className="form"
            >
              Register
            </button>
            <DemoButton classes="form" />
          </div>
          <p className="center-horizontal">
            Already have an account?&nbsp;&nbsp;
            <Link
              to="/"
              onClick={e => this.props.dispatch(openModal(<LoginForm />))}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);
