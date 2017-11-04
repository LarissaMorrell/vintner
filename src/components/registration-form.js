import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form box box-form"
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
                <div className="button-container">
                  <button
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}>
                      Register
                  </button>
                  <Link to="/">Login</Link>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
