import React from 'react';
import LoginForm from './login-form';


export default class Modal extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        display:true
      }
    }
    viewModal(){
      this.setState({display: !this.state.display});
      console.log(this.state.display);
    }

    render() {
      if(this.state.display){
        return (
          <div className="black-screen">
            <div className="modal box">
              <p onClick={e => this.viewModal()}>X</p>
              Here is the Modal
              <LoginForm />
            </div>
          </div>
        );
      }
      return null;
    }
}
