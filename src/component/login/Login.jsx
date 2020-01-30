import React, { Component, Fragment } from 'react';
import './Login.css';
import Navbar from '../navbar/Navbar'
import {Link} from 'react-router-dom'

class Login extends Component{
    render(){
        return(
            <Fragment>
                <Navbar/>
                    <div className="cardLogin">
                        <div className="cardData">
                            <div className="cardLoginInput">
                                <h3>Selamat Datang</h3>

                                <div className="formInput">
                                    <p htmlFor="username">Username</p>
                                    <input name="username" type="text" placeholder="hello@gmail.com" value="hello@gmail.com"/>
                                </div>

                                <div className="formInput">
                                    <p htmlFor="password">Password</p>
                                    <input name="password" type="password" placeholder="hello123" value="hello123"/>
                                </div>

                                <div className="cardLoginBtn">
                                    <Link className="btnLoginHome" to="/profile">Masuk</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

export default Login;