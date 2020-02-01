import React, { Component, Fragment } from 'react';
import ApiCustomer from './ApiCustomer';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

class DashboardCustomer extends Component{
    render(){
        return(
            <Fragment>
                <div className="cardFlex">
                    <div className="cardLeft width20">
                        <DashboardMenu/>
                    </div>

                    <div className="cardRight width80">
                        <div className="cardCustomer">
                                <h2>Data Customer</h2>
                                <p>Data diambil melalui API <a className="pinkColor" href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a> </p>
                            <ApiCustomer/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DashboardCustomer;