import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import img1 from '../assets/carousel1.avif'
import img2 from '../assets/carousel2.avif'
import img3 from '../assets/carousel3.avif'

const carouselImages = [img1, img2, img3];

const HorizontalScroll= ()=> {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      interval={5000} // Autoplay delay in milliseconds
      showStatus={false}
      showThumbs={false}
      emulateTouch={true}
      dynamicHeight={false}
      infiniteLoop={true}
      className="w-full "
    >
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1} - Description`}
            className="w-[500px] h-[500px] object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default HorizontalScroll;