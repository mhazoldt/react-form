import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/bootstrap.css'
import '../styles/bootstrap-grid.css'

import BaseLayout from './BaseLayout/BaseLayout.js'
import ParentComponent from './ParentComponent/ParentComponent.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
        
      </div>
    );
  }
}

export default App;
