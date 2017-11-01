import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

export default class CreateReviewForm extends React.Component {
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
                className="login-form box"
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
                    type="textarea"
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
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Add your Review
                </button>
                <Link to="/">Login</Link>
            </form>
        );
    }
}

// export default reduxForm({
//     form: 'registration',
//     onSubmitFail: (errors, dispatch) =>
//         dispatch(focus('registration', Object.keys(errors)[0]))
// })(RegistrationForm);
