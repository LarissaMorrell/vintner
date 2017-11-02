import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'; //focus
import Input from './input';
import {required, nonEmpty, length, isTrimmed} from '../validators'; //matches

export class CreateReviewForm extends React.Component {
    // onSubmit(values) {
    //     const {username, password, firstName, lastName} = values;
    //     const user = {username, password, firstName, lastName};
    //     return this.props
    //         .dispatch(registerUser(user))
    //         .then(() => this.props.dispatch(login(username, password)));
    // }
    // onSubmit={this.props.handleSubmit(values =>
    //     this.onSubmit(values)
    // )}
    render() {
        return (
            <form
                className="review-form box"
                >
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
                    type="submit">
                    Add your Review
                </button>
                <Link to="/">Login</Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'review',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('review', Object.keys(errors)[0]))
})(CreateReviewForm);
