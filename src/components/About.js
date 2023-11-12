import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Col, Container, Row } from 'react-bootstrap';

export default function About() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className='about-section' id='about'>
            <Container>
              <Row>
                <Col>
                    <div className='skill-box'>
                      <h2>
                        Skills
                      </h2>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia illum ullam iure assumenda, saepe tempora eum. Sit asperiores reprehenderit provident deserunt nostrum. Eum cumque maxime optio fuga numquam?
                      </p>

                      <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                          <div className='progressbar'><CircularProgressbar value={80}  text='85%'/></div>
                          <h3>Web Development</h3>
                        </div>

                        <div className='item'>
                        <div className='progressbar'><CircularProgressbar value={80}  text='80%'/></div>
                          <h3>UI/UX Design</h3>
                        </div>

                        <div className='item'>
                        <div className='progressbar '><CircularProgressbar value={80}  text='70%' className='yellow'/></div>
                          <h3>Logo Design</h3>
                        </div>

                        <div className='item'>
                        <div className='progressbar'><CircularProgressbar value={80}  text='65%'/></div>
                          <h3>Photography</h3>
                        </div>
                      </Carousel>

                    </div>
                </Col>
              </Row>
            </Container>
      </section>
      </>
  )
}
