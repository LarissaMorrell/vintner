import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {closeModal} from '../actions/modal';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        this.props.dispatch(closeModal());
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
          <div>
            <h2 className="form-title">
              Sign in to your account
            </h2>
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    validate={[required, nonEmpty]}
                />
                <div className="button-container">
                  <button disabled={this.props.pristine || this.props.submitting}>
                      Log in
                  </button>
                  <Link to="/register">Register</Link>
                </div>
            </form>
          </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
