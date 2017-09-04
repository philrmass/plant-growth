import React, { Component } from 'react';
import './App.css';
import Garden from './Garden.js';

var PLANTS = [
  {id: 0, x: 175, y: 300, sx: 0, sy: -20, color: '#50d000'},
  {id: 1, x: 0,   y: 200, sx: 7, sy: -7,  color: '#80ff00'}
]
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>A Plant Growth L-System</h2>
        </div>
        <div className="App-border">
        </div>
        <div className="App-body">
          <Garden plants={PLANTS} />
        </div>
        <div className="App-border">
        </div>
        <div className="App-footer">
        </div>
      </div>
    );
  }
}

export default App;
