import React, { Component } from 'react';

class DisplayComponent extends Component {
    constructor(){
      super()
      this.card = ""
    }

    makeCard() {
      if(this.props.sayWhat){
        this.card = (
          <div className="card">
            <div className="card-body">
              {this.props.sayWhat}
            </div>
          </div>
        )
      } else {
        this.card = ""
      }
      
    }


    render() {
      this.makeCard()

      return (
        <div>
          {this.card}
        </div>
      );
    }
  }

  export default DisplayComponent;