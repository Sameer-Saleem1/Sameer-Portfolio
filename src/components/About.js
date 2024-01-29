import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <Row>
            <Col>
              <div className="skill-box">
                <h2 data-aos="fade-down-left" data-aos-duration="800">
                  Skills
                </h2>
                <p data-aos="fade-down-right" data-aos-duration="800">
                  Welcome to my Skills Corner! I'm a front-end developer and
                  UI/UX designer with a passion for innovation. Proficient in
                  React, Bootstrap, JavaScript, Next.js, Node.js, HTML, and CSS,
                  I specialize in crafting dynamic, responsive websites tailored
                  to client requirements. Notable projects include a HealthCare
                  Website, TextUtils App for text manipulation, and dynamic
                  portfolio websites. Explore a fusion of creativity and
                  precision in every line of code, backed by a track record of
                  delivering solutions that make an impact.
                </p>

                <div data-aos="fade-left" data-aos-duration="800">
                  {" "}
                  <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="skill-slider"
                  >
                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>HTML</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>CSS</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar ">
                        <CircularProgressbar
                          value={80}
                          text="80%"
                          className="yellow"
                        />
                      </div>
                      <h3>JavaScript</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>React</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={75} text="75%" />
                      </div>
                      <h3>Node.js</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={75} text="75%" />
                      </div>
                      <h3>Angular.js</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={75} text="75%" />
                      </div>
                      <h3>Rust</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>Bootstrap</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>Tailwind CSS</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>UI/UX Design</h3>
                    </div>

                    <div className="item">
                      <div className="progressbar">
                        <CircularProgressbar value={85} text="85%" />
                      </div>
                      <h3>Logo Design</h3>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
