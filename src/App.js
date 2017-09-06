import React, { Component } from 'react';
import './App.css';
import Garden from './Garden.js';

var PLANTS = [
  {id: 0, x: 200, y: 300, fx: 0, fy: -10, color: '#80ff00'},
  {id: 1, x: 110,   y: 300, fx: -1, fy: -6,  color: '#50d000'}
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
