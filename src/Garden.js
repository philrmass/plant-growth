import React, { Component } from 'react';
/*import './Garden.css';*/
import Plant from './Plant.js';

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

  incrementI(value) {
    return value.replace(/I(\d+)/g, function(match, value) {
      return 'I' + (2* value);
    })
  }

  incrementA(value) {
    return value.replace(/A/g, 'I1[+A][-A]I1A');
  }

  incrementSystem() {
    this.setState(prevState => ({
      system: this.incrementA(this.incrementI(prevState.system))
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

export default Garden;
