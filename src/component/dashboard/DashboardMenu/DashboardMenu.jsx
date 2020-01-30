import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
import firmnardians from '../../../assets/images/firmnardians.png'

class DashboardMenu extends Component{
    render(){
        return(
            <Fragment>
                <div className="cardDashboard">
                    <div className="cardFlex">
                        <div className="cardLeft width20">
                            <div className="cardMenu">
                                <div className="logoDashboard">
                                    <h2>U</h2>
                                </div>
                            </div>
                        </div>
                        <div className="cardRight width80">
                            <div className="detailAccountDashboard">
                                <div className="detailUser">
                                    <div className="cardAvatar">
                                        <img className="myPicture" src={firmnardians} alt=""/>
                                    </div>
                                    <div className="cardName">
                                        <h4>firmnardians</h4>
                                    </div>
                                    <div className="cardSaldo">
                                        <h4>Rp 200.000</h4>
                                    </div>
                                    <div className="editMenu">
                                        <Link to="/EditProfile">Edit Akun</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default DashboardMenu;