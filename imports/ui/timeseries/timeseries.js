import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './style.css';

import {Line} from 'react-chartjs-2';

import 'chartjs-plugin-zoom';
// import * as zoom from 'chartjs-plugin-zoom'

// App component - represents the whole app
class Timeseries extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let plugins = {
      zoom: {
        pan: {
          enabled: true,
          mode: 'xy'
        },
        zoom: {
          enabled: true,
          mode: 'xy'
        }
      }

      // zoom: {
      //   pan: {
      //     enabled: true,
      //         mode:'xy'
      //   },
      //   zoom: {
      //     enabled: true,
      //         mode:'xy'
      //   }
      // }
    }
    return(
      <div className="container">
        <h1>{this.props.title}</h1>
        <Line data={this.props.data} width={100} height={50} options={
          { maintainAspectRatio: true,
            scales: {
              xAxes: [{
                scaleLabel:{
                  display: true,
                  labelString: "Months"
                }
                // stacked: true
              }],
              yAxes: [{
                scaleLabel:{
                  display: true,
                  labelString: "Wind speed (m/s)"
                }
                // stacked: true
              }]
            }
            // pan: {
            //   enabled: true,
            //   mode: "x",
            //   speed: 10,
            //   threshold: 10
            // },
            // zoom: {
            //   enabled: true,
            //   drag: false,
            //   mode: "x",
            //   limits: {
            //     max: 10,
            //     min: 0.5
            //   }
            // }
          }
        } />
      </div>
    );

  //options={{ maintainAspectRatio: true}}

  } // end of render
} // end of class

export default withTracker((props) => {
  return {

  };
})(Timeseries);
