import React, { Component } from 'react';

import ChildComponent from './ChildComponent.js'
import DisplayComponent from './DisplayComponent.js'

class ParentComponent extends Component {
    constructor(props){
      super(props);
  
      //we are really in a *bind* here.... :)
      //fix it...
  
      //state lives here
      this.state = {
        whatToSay: "",
        whatWasSaid: "",
      }
      this.handleInput = this.handleInput.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInput(e) {
      e.preventDefault();
      //set the state on input change
      this.setState({whatToSay: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      //check console to see if firing
      console.log("fired");
      //set the state for props and for value (prevents output from appearing when typing)
      this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
      //clear our input by resetting state
      this.setState({whatToSay: ""});
  
    }
    render() {
      return (
        <div className="container">
          <div className="row mb-2 form-group">
            <input className="col-4 form-control" onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
          </div>
          <div className="row">
            <ChildComponent onClick={this.handleSubmit.bind(this)} whatToSay={this.state.whatToSay} />
          </div>
          <div className="row">
            <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
        </div>
      );
    }
  }

  export default ParentComponent;