import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import {closeModal} from '../actions/modal';

export class Modal extends React.Component {

    render() {
      if(this.props.display){
        return (
          <div className="black-screen">
            <div className="modal box">
              <div className="boxclose"
                id="boxclose"
                onClick={e => this.props.dispatch(closeModal())}>
              </div>
              <LoginForm />
            </div>
          </div>
        );
      }
      return null;
    }
}

// <div className="close-win"
//   onClick={e => this.props.dispatch(closeModal())}>
//   <i className="fa fa-window-close-o" aria-hidden="true"></i>
// </div>

// <i className="fa fa-window-close-o" aria-hidden="true"></i>
export default connect()(Modal);
