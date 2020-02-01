import React, { Component, Fragment } from 'react';
import {Doughnut} from 'react-chartjs-2';

const users = {
	labels: [
		'Bandung',
		'Jakarta',
		'Bali'
	],
	datasets: [{
		data: [30, 50, 60],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
  };

  class ReportGraph extends Component{
    render(){
        return(
            <Fragment>
                <div>
                    <Doughnut data={users} />
                </div>  
            </Fragment>
        )
    }
}

export default ReportGraph;