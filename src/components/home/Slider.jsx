import React, { useState } from 'react'
import './Slider.css'

import img1 from '../../assets/imgs/slider-img-1.webp'
import img2 from '../../assets/imgs/slider-img-2.webp'
import img3 from '../../assets/imgs/slider-img-3.webp'

import Carousel from 'react-bootstrap/Carousel'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img 
            className="d-block img-fluid w-100"
            src={img1}        
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100"
            src={img2}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}




