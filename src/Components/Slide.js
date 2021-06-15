import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slide1 from './Images/slide_1.jpg';
import slide2 from './Images/slide_2.jpg';
import "./Slide.css"

class Slide extends Component {
    // Use of third library for the Slide
    render() {
        return (
            <Carousel className="slide" showThumbs={false}>
                <div>
                    <img src={slide1} alt="slide 1"/>
                </div>
                <div>
                    <img src={slide2} alt="slide 2"/>

                </div>

            </Carousel>
        );
    }
};

export default Slide;