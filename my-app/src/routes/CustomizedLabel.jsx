import React from 'react';

export default class CustomizedLabel extends React.Component {
  render () {
    const {x, y, value, width, fill} = this.props;
   	return <text 
               x={x} 
               y={y} 
               dy={25} 
               dx={width + 30}
               fontSize='16' 
               fontFamily='sans-serif'
               fill={fill}
               textAnchor="middle">{value}%</text>
    }
}

