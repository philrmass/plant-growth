import React from 'react';
import './Garden.css';
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
      return 'I' + (++value);
    })
  }

  incrementA(value) {
    return value.replace(/A/g, 'I0[+A][-A]I0A');
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
                    fx={plant.fx}
                    fy={plant.fy}
                    color={plant.color}
                    system={this.state.system}
                  />);
    });

    return (
      <div>
        <svg className="Garden">
         {plants}
        </svg>
        <form>
          <input type="button" name="grow" value="Grow" onClick={this.incrementSystem} />
          <input type="button" name="reset" value="Reset" onClick={this.resetSystem} />
        </form>
        <div className="System">
          <p>{this.state.system}</p>
        </div>
      </div>
    );
  }
}

export default Garden;
