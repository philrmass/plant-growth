import React from 'react';

class Plant extends React.Component {
  branch(side, system, params) {
      var lx = params.x;
      var ly = params.y;
      var lfx = params.fx;
      var lfy = params.fy;
      var bx = 0.7071 * (params.fx + params.fy);
      var by = 0.7071 * (params.fy - params.fx);
      if(!side)
      {
        bx = 0.7071 * (params.fx - params.fy);
        by = 0.7071 * (params.fy + params.fx);
      }
      params.fx = bx;
      params.fy = by;

      this.parseSystem(system, params);

      params.x = lx;
      params.y = ly;
      params.fx = lfx;
      params.fy = lfy;
  }

  parseSystem(system, params) {
    const ratio = 0.1;
    const sx = ratio * -params.fy;
    const sy = ratio * params.fx;
    var pts = [];

    while(params.index < system.length)
    {
      switch(system[params.index])
      {
        case 'A':
          params.index++;
          pts = [];
          pts.push(params.x + sx);
          pts.push(params.y + sy);
          pts.push(params.x + params.fx);
          pts.push(params.y + params.fy);
          pts.push(params.x - sx);
          pts.push(params.y - sy);
          params.points.push(pts);
          break;

        case 'I':
          var matched = system.substr(params.index).match(/^I(\d+)/);
          var scale = 1;
          if(matched && matched[1])
          {
              scale = matched[1];
              params.index += matched[1].length;
          }
          params.index++;
          pts = [];
          pts.push(params.x + sx + (scale * params.fx));
          pts.push(params.y + sy + (scale * params.fy));
          pts.push(params.x - sx + (scale * params.fx));
          pts.push(params.y - sy + (scale * params.fy));
          pts.push(params.x - sx);
          pts.push(params.y - sy);
          pts.push(params.x + sx);
          pts.push(params.y + sy);
          params.points.push(pts);
          params.x += scale * params.fx;
          params.y += scale * params.fy;
          break;

        case '[':
          var side = (system[params.index + 1] === '+')
          params.index += 2;
          this.branch(side, system, params);
          break;

        case ']':
          params.index++;
          return;

        default:
          params.index++;
          break;
      }
    }
  }

  render() {
    const params = {
      index: 0,
      x: this.props.x,
      y: this.props.y,
      fx: this.props.fx,
      fy: this.props.fy,
      points: []
    };
    this.parseSystem(this.props.system, params);

    var strs = [];
    for(var i = 0; i < params.points.length; i++)
    {
      var str = params.points[i].join(',');
      str = str.replace(/,([\d.]+),/g, ',$1 ');
      strs.push(<polygon key={i} points={str} fill={this.props.color} />);
    }

    return (
      <svg>
        {strs}
      </svg>
    );
  }
}

export default Plant;
