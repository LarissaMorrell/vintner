import React from 'react';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form'; //focus
import Input from './input';
import {required, nonEmpty, length, isTrimmed} from '../validators'; //matches

export class CreateReviewForm extends React.Component {
    onSubmit(values) {
      //...
    }


    //TODO pass in type of alcohol using props
    render() {
        return (
            <form
                className="review-form box"
                onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values))}>
                <Field
                  component={Input}
                  type="text"
                  name="title"
                  placeholder="Title" />
                <Field
                  component="textarea"
                  name="comments"
                  placeholder="How did you like this drink?"
                  validate={[required, length({min: 0, max: 300}), isTrimmed]} />
                <Field
                    component="textarea"
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
