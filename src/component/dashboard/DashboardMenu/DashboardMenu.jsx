import React, { Component, Fragment } from 'react'
import {NavLink} from 'react-router-dom';

class DashboardMenu extends Component{
    render(){
        return(
            <Fragment>
                <div className="cardDashboard">

                        <div className="detailAccountDashboard">

                            <div className="detailUser">
                                <div className="logoDashboard">
                                    <h4>UtamaTech</h4>
                                </div>
                                <hr/>
                            </div>

                            <div className="mainLink">
                                <h2>Menu</h2> 

                                <div>
                                    <NavLink exact activeClassName="btnLinkMenu--active" className="btnLinkMenu" to="/Dashboard">
                                       Dashboard
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink activeClassName="btnLinkMenu--active" className="btnLinkMenu" to="/DashboardReport">
                                        Report
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink activeClassName="btnLinkMenu--active" className="btnLinkMenu" to="/DashboardCustomer">
                                        Customer Profile
                                    </NavLink>
                                </div>

                                <div>
                                    <NavLink activeClassName="btnLinkMenu--active" className="btnLinkMenu" to="/DashboardProfile">
                                        Profile
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                </div>
            </Fragment>

        )
    }
}

export default DashboardMenu;