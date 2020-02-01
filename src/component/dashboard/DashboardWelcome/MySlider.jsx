import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MySlider extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <Fragment>
            <Slider {...settings}>
                        <div className="cardSlick">
                            <h3>Cara meningkatkan bisnis</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="cardSlick">
                            <h3>Cara agar bisnis tidak bangkrut</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="cardSlick">
                            <h3>Beberapa jenis usaha populer</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                    </Slider>
            </Fragment>
        )
    }
}

export default MySlider;