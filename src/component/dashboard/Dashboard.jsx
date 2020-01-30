import React, { Component, Fragment } from 'react'
import Navbar from '../navbar/Navbar';
import imgWelcome from '../../assets/images/imgWelcome.jpg';
import {Link} from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <Fragment>
                <Navbar/>
                {/* <div className="cardData"></div> */}
                    <div className="cardFlex">
                        <div className="cardLeft">
                            <div className="cardData">
                                <div className="sloganHome">
                                    <h2>Kembangkan Bisnismu</h2>
                                    <p>Kami membantu Anda untuk mengelola bisnis kapan saja dan dimana saja dengan aplikasi HOP Point of Sales.</p>

                                    <div className="cardLoginHome">
                                        <Link className="btnLoginHome" to="/login">Masuk</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cardRight width80">
                            <div className="cardData">
                                <div className="imagesWelcome">
                                    <img className="imgWelcome" src={imgWelcome} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Dashboard;