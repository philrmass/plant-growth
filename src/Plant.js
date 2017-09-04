import React, { Component } from 'react';

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

export default Plant;
