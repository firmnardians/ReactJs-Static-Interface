import React, { Component, Fragment } from 'react';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import {Link} from 'react-router-dom';
import Todolist from './Todolist';
import MySlider from './MySlider';

    class DashboardWelcome extends Component{
      render(){
          return(
              <Fragment>
                  <div className="cardFlex">
                    <div className="cardLeft width20">
                        <DashboardMenu/>
                    </div>

                    <div className="cardRight width80">
                      <div className="cardWelcome">
                        <div className="headerDashboard">
                          <h2>Dashboard</h2>
                        </div>

                        <div className="cardSayHello">
                          <div className="cardFlex">
                            <div className="cardLeft">
                              <h2>Selamat datang</h2>
                              <p>Hebat, bisnis kamu meningkat 60% dibulan ini.!</p>
                              <p>Pertahankan peningkatan kamu, jangan menyerah.</p>
                            </div>

                            <div className="cardRight">
                              <Link to="/DashboardReport">
                                <div className="btnVisit">Pelajari lebih lanjut</div>
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="cardFlex">
                          <div className="cardLeft">
                            <div className="cardTodo">
                              <h2>Buat Todolist</h2>
                              <p>Catat semua pekerjaan yang ingin kamu lakukan.</p>
                              <Todolist/>
                            </div>
                          </div>

                          <div className="cardRight">
                            <div className="cardTips">
                              <h2>Tips and Trik</h2>
                              <p>Beberapa cara untuk meningkatkan bisnis kamu.</p>
                              <MySlider/>
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

  export default DashboardWelcome;