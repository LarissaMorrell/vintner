import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/auth';

export class DemoButton extends React.Component {
    render() {
        return (
          <button
            className={this.props.classes}
            onClick={() => this.props.dispatch(login("demo", "password"))}
          >
            Demo Account
          </button>
        );
    }
}

export default connect()(DemoButton);
