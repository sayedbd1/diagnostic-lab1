import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item className="slider">
              <img
                className="d-block w-100 h-50vh"
                src={banner1}
                alt="First slide"
              />
          
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            
        </>
    );
};

export default Banner;