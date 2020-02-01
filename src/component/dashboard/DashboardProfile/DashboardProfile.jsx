import React, { Component, Fragment } from 'react';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import firmnardians from '../../../assets/images/firmnardians.png'

class DashboardProfile extends Component{
    render(){
        return(
            <Fragment>
                <div className="cardFlex">
                    <div className="cardLeft width20">
                        <DashboardMenu/>
                    </div>

                    <div className="cardRight width80">
                        <div className="cardProfile">
                            <div className="cardNotifPackages">
                                <h2>Paket Aktif</h2>
                                <p>Kamu memiliki paket bisnis regular.</p>
                            </div>
                            
                            <div className="cardDetailAccount">
                                <div className="cardAvatar">
                                    <img className="myPicture" src={firmnardians} alt=""/>
                                </div>
                                <h2>
                                    firmnardians
                                </h2>
                                <p>hello@gmail.com</p>
                  
                            </div>
                            <hr/>
                            <div className="cardBussines">
                               
                                <h2>Bisnis Usaha</h2>
                                <p>Detail akun bisnis usaha kamu.</p>

                                <div className="detailBussines">
                                    <div className="cardFlex">
                                        <div className="cardLeft marginRight">
                                            <div className="DataBussines">
                                                <p>Nama Usaha:</p>
                                                <h4>Somay BangJoni</h4>
                                            </div>
                                        </div>

                                        <div className="cardRight">
                                            <div className="DataBussines">
                                                <p>Jenis Usaha:</p>
                                                <h4>Kuliner</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cardFlex">
                                        <div className="cardLeft marginRight">
                                            <div className="DataBussines">
                                                <p>Alamat Usaha:</p>
                                                <h4>Jakarta Barat</h4>
                                            </div>
                                        </div>

                                        <div className="cardRight">
                                            <div className="DataBussines">
                                                <p>Jumlah Cabang:</p>
                                                <h4>2</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="btnPrimary">
                                        Edit Bisnis
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

export default DashboardProfile;