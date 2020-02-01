import React, { Component, Fragment } from 'react';
import {Pie} from 'react-chartjs-2';

const users = {
	labels: [
		'Wanita',
		'Laki-laki'
	],
	datasets: [{
		data: [30, 50],
		backgroundColor: [
		'#4960d0',
		'#d66045'
		],
		hoverBackgroundColor: [
		'#4960d0',
		'#d66045'
		]
	}]
};


  class ReportGraph extends Component{
    render(){
        return(
            <Fragment>
                <div>
                    <Pie data={users} />
                </div>  
            </Fragment>
        )
    }
}

export default ReportGraph;