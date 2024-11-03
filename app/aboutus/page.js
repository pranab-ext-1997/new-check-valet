"use client";
import React, { useRef, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import innerbanner from "../assets/images/inner-banner.png";
import checkvaletone from "../assets/images/check-valet-one.png";
import trust from "../assets/images/trust.png";
import checkvalettwo from "../assets/images/check-valet-two.png";
import whoweare from "../assets/images/who-we-are-one.png";
import demoVideoPoster from "../assets/images/our-commitment-thumb.png";
import weofferone from "../assets/images/what-we-offer-one.png";
import weoffertwo from "../assets/images/what-we-offer-two.png";
import weofferthree from "../assets/images/what-we-offer-three.png";
import demoVideo from "../assets/video/demo-video.mp4";
import playicon from "../assets/images/icon/play-white-icon.svg";
import pauseicon from "../assets/images/icon/pouse-white-icon.svg";

const Aboutus = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <section
        className="inner-banner reservation-bnr"
        style={{
          backgroundImage: `url(${innerbanner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <h1>About</h1>
          <p>Join us in our mission to promote safe transportation</p>
        </Container>
      </section>

      <section className="check-valet">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="content">
                <h3>Welcome to</h3>
                <strong>Check valet</strong>
                <p>
                  the premier valet car parking service designed to provide you
                  with convenience, security, and a seamless experience. We
                  understand that your time is valuable, and our mission is to
                  make your parking experience hassle-free, whether you're
                  visiting a restaurant, hotel, event, or a commercial space.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="img-bx">
                <Image src={checkvaletone} alt="Valet" className="img-fluid" />
                <div className="btm">
                  <Image
                    src={checkvalettwo}
                    alt="Valet"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="who-we-are p-bottom">
        <Container fluid>
          <Row>
            <Col md={6}>
              <Image src={whoweare} alt="Valet" className="img-fluid" />
            </Col>
            <Col md={6}>
              <div>
                <strong>Who We Are</strong>
                <h3>Parking Made Effortless, Every Time</h3>
                <p>
                  Founded in [Year], [Your Company Name] has grown to become a
                  trusted name in valet services. Our team of professionally
                  trained valets takes pride in delivering excellent customer
                  service while ensuring that your vehicle is handled with the
                  utmost care. We offer our services to a wide range of
                  establishments and events, tailoring our approach to meet the
                  unique needs of every client.
                </p>
                <div className="trust-icon">
                <Image src={trust} alt="trust" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     

      <section className="what-we-offer">
      <div className="heading">
       <h3>What We Offer</h3>
      </div>

    <div className="wraping-container">
        <div className="box">
        <Image src={weofferone} alt="weoffer" className="img-fluid" />
        <div className="content-bx">
              <h6>Convenience</h6>
              <p>We make parking quick and simple, so you can focus on what matters most. Whether you're attending a special event or simply going about your day, our valets are ready to serve you.</p>
        </div>
        </div>
        <div className="box">
        <Image src={weoffertwo} alt="weoffer" className="img-fluid" />
        <div className="content-bx">
              <h6>Security</h6>
              <p>We make parking quick and simple, so you can focus on what matters most. Whether you're attending a special event or simply going about your day, our valets are ready to serve you.</p>
        </div>
        </div>
        <div className="box">
        <Image src={weofferthree} alt="weoffer" className="img-fluid" />
        <div className="content-bx">
              <h6>Professionalism</h6>
              <p>We make parking quick and simple, so you can focus on what matters most. Whether you're attending a special event or simply going about your day, our valets are ready to serve you.</p>
        </div>
        </div>
       </div> 
      </section>


      <section className="our-commitment p-top p-bottom">
        <Container fluid>
              <div className="v-d-content">
              <h3>Our Commitment</h3>
              <p>At [Your Company Name], we believe in providing more than just parking services. We create a premium, worry-free experience, so you can enjoy your time without the stress of finding a parking spot or worrying about your vehicle. Whether it’s a one-time event or a long-term partnership, we aim to deliver exceptional value and peace of mind.</p>
              </div>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              poster={demoVideoPoster.src}
              preload="metadata"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
            <Button onClick={togglePlayPause} className="play-pause-btn">
              <Image
                src={isPlaying ? pauseicon : playicon}
                alt={isPlaying ? "Pause Icon" : "Play Icon"}
              />
            </Button>
          </div>
        </Container>
      </section>


    </>
  );
};

export default Aboutus;
