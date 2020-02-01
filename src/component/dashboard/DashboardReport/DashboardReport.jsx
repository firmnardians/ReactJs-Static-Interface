import React, { Component, Fragment } from 'react';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import ReportGraphOrder from './ReportGraphOrder';
import ReportGraphUser from './ReportGraphUser';
import ReportGraphCity from './ReportGraphCity';

class DashboardReport extends Component{
    render(){
        return(
            <Fragment>
                <div className="cardFlex">
                    <div className="cardLeft width20">
                        <DashboardMenu/>
                    </div>

                    <div className="cardRight width80">
                        <div className="cardReport">
                            <div className="headerReport">
                                <h2>Report</h2>
                                <p>Kumpulan hasil report yang kami dapat dari usaha kamu.</p>
                            </div>
                           
                            <div className="cardFlex">
                                <div className="cardLeft">
                                    <div className="cardGraph">
                                        <h2>Data Penjualan</h2>
                                        <p>Beberapa grafik penjualan setiap bulan.</p>
                                        <ReportGraphOrder/>
                                    </div>
                                </div>
                                <div className="cardRight">
                                    <div className="cardFlex">
                                        <div className="cardLeft">
                                            <div className="cardGraph">
                                                <h4>Jumlah Pegawai</h4>
                                                <h5>200</h5>
                                            </div>
                                        </div>
                                        <div className="cardRight">
                                            <div className="cardGraph">
                                                <h4>Jumlah Toko</h4>
                                                <h5>51</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cardFlex">
                                        <div className="cardLeft">
                                            <div className="cardGraph">
                                                <h4>Jumlah Pemasukan</h4>
                                                <h5>Rp 5.000.000</h5>
                                            </div>
                                        </div>
                                        <div className="cardRight">
                                            <div className="cardGraph">
                                                <h4>Jumlah Pengeluaran</h4>
                                                <h5>Rp 2.000.000</h5>
                                            </div>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>

                            <div className="cardFlex">
                                <div className="cardLeft">
                                    <div className="cardGraph">
                                        <h2>Kota Favorit</h2>
                                        <p>Kota paling banyak pengunjungnya.</p>
                                        <ReportGraphCity/>
                                    </div>
                                </div>

                                <div className="cardRight">
                                    <div className="cardGraph">
                                        <h2>Tipe Pegawai</h2>
                                        <p>Tipe pegawai kamu dilihat dari jenis kelaminnya.</p>
                                        <ReportGraphUser/>
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

export default DashboardReport;