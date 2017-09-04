import React, { Component } from 'react';
import './App.css';

class Plant extends React.Component {
  render() {
    return (
        <circle 
          cx={this.props.x}
          cy={this.props.y}
          r={5 * this.props.system.length}
          fill={this.props.color}
        />
    );
  }
}

class Garden extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {system: 'A'};

    this.resetSystem = this.resetSystem.bind(this);
    this.incrementSystem = this.incrementSystem.bind(this);
  }

  resetSystem() {
    this.setState(prevState => ({
        system: 'A'
    }));
  }

  incrementSystem() {
    this.setState(prevState => ({
        system: prevState.system + 'X'
    }));
  }

  render() {
    var plants = [];

    this.props.plants.forEach((plant) => {
      plants.push(<Plant 
                    key={plant.id} 
                    x={plant.x} 
                    y={plant.y} 
                    sx={plant.sx}
                    sy={plant.sy}
                    color={plant.color}
                    system={this.state.system}
                  />);
    });

    return (
      <div className="Garden">
        <svg width="300" height="300">
          <rect x="0" y="0" width="300" height="300" fill="#996936" />
         {plants}
        </svg>
        <p>{this.state.system}</p>
        <form>
          <input type="button" name="grow" value="Grow" onClick={this.incrementSystem} />
          <input type="button" name="reset" value="Reset" onClick={this.resetSystem} />
        </form>
      </div>
    );
  }
}

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
