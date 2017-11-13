import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import RadioGroup from './radio-group';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

//for the link to the login page. Open login modal on redirect to dashboard
import LoginForm from './login-form';
import {openModal} from '../actions/modal';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values)
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
          <div>
            <h2 className="form-title">
              Create your account
            </h2>
            <form
                id="registration-form"
                className="box-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                  component={Input}
                  type="text"
                  name="firstName"
                  placeholder="First Name" />
                <Field
                  component={Input}
                  type="text"
                  name="lastName"
                  placeholder="Last Name" />
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
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm Password"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <Field
                    component={RadioGroup}
                    type="radio"
                    name="avatar"
                    imgFileNames={["boy1", "boy2", "boy3", "boy4", "girl1", "girl2", "girl3", "girl4"]}
                />
                <div className="button-container">
                  <button
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}>
                      Register
                  </button>
                  <Link to="/" onClick={e => this.props.dispatch(openModal(<LoginForm />))}>
                      Login
                  </Link>
                </div>
            </form>
          </div>
        );
    }
}

// <Field name="avatar"
//     component={RadioGroup}
//     type="radio"
//     validate={[required]}
//   />

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
