import React, { Component, Fragment } from 'react'
import './Dashboard.css';
import DashboardGraph from './DashboardGraph/DashboardGraph';
import DashboardMenu from './DashboardMenu/DashboardMenu';

class Dashboard extends Component{
    render(){
        return(
            <Fragment>
                {/* <div className="cardData"></div> */}
                    <div className="cardFlex">
                        <div className="cardLeft width30">
                            <DashboardMenu/>
                        </div>
                        <div className="cardRight width70">
                            <DashboardGraph/>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Dashboard;