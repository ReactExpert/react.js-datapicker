import React, { Component } from 'react';
import './App.css';

import Appbar from './Appbar';
import Picker from './Picker';
import Bottomappbar from './Bottomappbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appbar />
        <Picker />
        <Bottomappbar />
      </div>
    );
  }
}

export default App;
