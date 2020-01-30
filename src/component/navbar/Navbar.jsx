import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="navbar">
                    <div className="navbarBrand">
                        <Link className="logoName" to="/" >UtamaTech</Link>
                    </div>


                    <div className="navLink">
                        <div className="cardFlex">
                            {/* <Link className="dataNavLink" to="/Login">Login</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;