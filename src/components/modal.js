import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from './login-form';


export default class Modal extends React.Component {

    render() {
          return (
            <div className="modal box">
              Here is the Modal
              <LoginForm />
            </div>
          );
    }
}
