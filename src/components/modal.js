import React from 'react';
import LoginForm from './login-form';


export default class Modal extends React.Component {

    render() {
      if(this.props.display){
        return (
          <div className="black-screen">
            <div className="modal box">
              <div className="close-win" >
                X
              </div>
              <LoginForm />
            </div>
          </div>
        );
      }
      return null;
    }
}

// <i className="fa fa-window-close-o" aria-hidden="true"></i>
