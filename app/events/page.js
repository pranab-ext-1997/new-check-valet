'use client';

import React, { useRef, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import innerbanner from "../assets/images/inner-banner.png";
import eventvalet from "../assets/images/event-valet.png";
import eventvaletTwo from "../assets/images/event-valet-two.png";
import demoVideo from "../assets/video/demo-video.mp4";

import boxwrapOne from "../assets/images/bx-wrap-one.png";
import boxwrapTwo from "../assets/images/bx-wrap-two.png";
import boxwrapThree from "../assets/images/bx-wrap-three.png";
import playicon from "../assets/images/icon/play-icon.svg";
import pauseicon from "../assets/images/icon/pause-icon.svg";

import demoVideoPoster from "../assets/images/vid-poster.png";
import { useRouter } from "next/navigation";

const Event = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section
        className="inner-banner"
        style={{ backgroundImage: `url(${innerbanner.src})` }}
      >
        <Container>
          <small>Seamless Parking Experience</small>
          <h1>Event & Venue Valet Services</h1>
          <p>
            Our personalized valet service eliminates the hassle of parking,
            letting you relax and enjoy your time.
          </p>
          <div class="btn-container">
          <Button className="animate-btn" onClick={() => router.push("/reservation")}>
            Book a private event
          </Button>
          </div>

        </Container>
      </section>

      <section className="event-valet pt-100 pb-100">
        <Container>
          <div className="evt-top">
            <Row>
              <Col md={5}>
                <Image
                  src={eventvalet}
                  alt="event"
                  layout="responsive"
                />
              </Col>
              <Col md={7}>
                <div className="content-bx">
                  <h2 className="unique_title">
                    Comprehensive Event Valet Services
                  </h2>
                  <div className="divider"></div>
                  <p>
                    For events of any size, Check Valet provides top-notch
                    service with competitive rates. <br /> Whether your event
                    hosts 30 or 1,000 guests, we've got you covered with
                    reliable, efficient, and professional valet solutions to
                    ensure your event runs smoothly.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="e-w-container">
          <Container>
            <div className="e-w-content">
              <h2 className="unique_title">
                Dedicated Support for Seamless Service
              </h2>

              <div className="divider"></div>

              <p>
                In addition to guaranteeing that we can beat the price of any
                professional competitor, our local and privately-owned status
                ensures unparalleled customer service.
                <br />
                Our valet attendants undergo a rigorous 10-step vetting process,
                ensuring that our clients receive only the most professional,
                capable, and reliable staff.
              </p>
            </div>
          </Container>
          <div className="e-w-img">
            <Image
              src={eventvaletTwo}
              alt="event"
            />
          </div>
        </div>

        <Container>
          <Row className="vid-order">
            <Col md={6}>
              <div className="video-player">
                <div className="v-wrap">
                  <video
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    poster={demoVideoPoster.src}
                    onClick={togglePlay}
                    preload="metadata"
                  >
                    <source src={demoVideo} type="video/mp4" />
               
                  </video>


                  <div className="btn-position">
                    <button onClick={togglePlay} className="play-pause-btn">
                      {isPlaying ? (
                        <img src={pauseicon.src} alt="Pause" />
                      ) : (
                        <img src={playicon.src} alt="Play" />
                      )}
                    </button>

                    <div>
                      <h6>Exceptional Service </h6>
                      <small>Watch The Video</small>
                    </div>
                  </div>
                </div>
                <p>
                  In addition to guaranteeing that we can beat the price of any
                  professional competitor, our local and privately-owned status
                  ensures unparalleled customer service. Our valet attendants
                  undergo a rigorous 10-step vetting process, ensuring that our
                  clients receive only the most professional, capable, and
                  reliable staff.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vid-content">
                <h2 className="unique_title">
                  Unmatched Value and Exceptional Service
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="future-event">
        <Container>
          <div className="center-content text-center">
            <h2 className="unique_title">Featured Events</h2>
            <p>
              Premium Valet Parking Solutions: Providing Luxurious Services
              while Enhancing your Convenience.
            </p>
          </div>
        </Container>

        <div className="bx-wrap">
          <div className="bx-item">
            <div className="lft-bx">
              <Image
                src={boxwrapOne}
                alt=""
                layout="responsive"
                width={300}
                height={200}
              />
              <p>Cheeky Peach Valet Service</p>
            </div>
          </div>
          <div className="bx-item">
            <div className="rght-bx">
              <div className="blckbx">
                <div>
                  <h4>Patchogue Event Parking</h4>
                  <p>
                  Our Luxury Bridal Valet Service provides an elegant and seamless arrival experience for weddings. From red carpet entry for the bridal party to attentive service for guests, we ensure every detail enhances the special day.
                  </p>
                </div>
              </div>
              <div className="child-bx">
                <Image
                  src={boxwrapTwo}
                  alt=""
                  layout="responsive"
                  width={300}
                  height={200}
                />
                <p>Patchogue Theatre Valet Parking</p>
              </div>
              <div className="child-bx">
                <Image
                  src={boxwrapThree}
                  alt=""
                  layout="responsive"
                  width={300}
                  height={200}
                />
                <p>Strong Island Fight Night's Self-Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
