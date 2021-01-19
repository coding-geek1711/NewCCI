import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import {MdNavigateNext} from 'react-icons/md'
import "./success.css";

const Icons = {
    nextIcon:<MdNavigateNext className='nextIcon-carousel'/>,
    prevIcon:<MdNavigateNext className='nextIcon-carousel' style={{transform:"scaleX(-1)"}}/>
}

export default function success() {
  return (
    <div className="success-container">
      <div className="container success-test">
        <h1 style={{ fontSize: "5rem" }}>Our Success Stories</h1>
        <Carousel nextIcon={Icons.nextIcon} prevIcon={Icons.prevIcon} className='carousel-parent'>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/728x400.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/728x400.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/728x400.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
