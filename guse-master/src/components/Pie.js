import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';
import './pie.css';

const desc_lookup = {
    "INTC": "supplies processors for computer manufacturers",
    "AAPL": "designs and develops consumer electronics (phones, computers, tablets)",
    "KO": "manufacturer, retailer, and marketer of nonalcoholic beverages",
    "MSFT": "designs and develops computer software and personal computers",
    "AMZN": "e-commerce website, cloud infrastructure services",
    "HRL": "packaged and refrigerated foods",
    "FB": "social networking website",
    "COST": "membership-only wholesale retailer",
    "LOW": "retail home improvement and appliances",
    "HON": "commercial and consumer products"
}

class Pie extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{ height: '500px', width: '500px' }}>
      <ResponsivePie
  data={this.props.data}
  margin={{
      "top": 40,
      "right": 80,
      "bottom": 80,
      "left": 80
  }}
  style={{
      color: 'black'
  }}
  sortByValue={true}
  innerRadius={0.7}
  colors="reds"
  colorBy="id"
  borderWidth={1}
  borderColor="inherit:darker(0.2)"
  radialLabelsSkipAngle={10}
  radialLabelsTextXOffset={6}
  radialLabelsTextColor="white"
  radialLabelsLinkOffset={0}
  radialLabelsLinkDiagonalLength={16}
  radialLabelsLinkHorizontalLength={24}
  radialLabelsLinkStrokeWidth={1}
  radialLabelsLinkColor="inherit:darker(1.2)"
  enableSlicesLabels={false}
  slicesLabelsSkipAngle={10}
  slicesLabelsTextColor="#333333"
  animate={true}
  motionStiffness={90}
  motionDamping={15}
  tooltip={(recv) => {
      return (<div>
            <h4 style={{ color: 'black' }}>{recv.label}</h4>
            <p style={{ color: 'black' }}>{desc_lookup[recv.id]}</p>
            <p style={{ color: 'black' }}>Market Sentiment: {this.props.sentiments[recv.id] ? this.props.sentiments[recv.id].toFixed(2) : null}</p>
          </div>)
  }}
  legends={[
      {
          "anchor": "bottom",
          "direction": "row",
          "translateY": 56,
          "itemWidth": 100,
          "itemHeight": 18,
          "itemTextColor": "white",
          "symbolSize": 18,
          "symbolShape": "circle",
          "effects": [
              {
                  "on": "hover",
                  "style": {
                      "itemTextColor": "white"
                  }
              }
          ]
      }
  ]}
/>
          </div>
    );
  }
}

export default Pie;