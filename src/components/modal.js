import React from 'react';
import {connect} from 'react-redux';
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
              {this.props.formComponent}
            </div>
          </div>
        );
      }
      return null;
    }
}
export default connect()(Modal);
