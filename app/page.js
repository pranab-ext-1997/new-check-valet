'use client'
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import servicecar from "./assets/images/service-car.png";
import carouselOne from "./assets/images/pexels-brett-sayles-1756957.jpg";
import carouselTwo from "./assets/images/pexels-junnoet-235222.jpg";
import carouselThree from "./assets/images/machuda.jpg";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import leftArrow from "./assets/images/icon/left-arrow-icon.svg";
import rightArrow from "./assets/images/icon/right-arrow-icon.svg";
import linkicon from "./assets/images/icon/link-icon.svg";
import appstore from "./assets/images/icon/app-store.svg";
import playstore from "./assets/images/icon/play-store.svg";
import appview from "./assets/images/app-view.png";

import psliderone from "./assets/images/partner-slider-one.png";
import pslidertwo from "./assets/images/partner-slider-two.png";
import psliderthree from "./assets/images/partner-slider-three.png";
import psliderfour from "./assets/images/partner-slider-four.png";
import apiRequest from "./Api";
import { flashmsg, seperataURL } from "./GlobalFunction";

const Home = () => {
  const sliderRef = useRef(null); // Reference for the slider
  const router = useRouter();

  const [currentEventImage, setCurrentEventImage] = useState(carouselOne);
  const [isLoaded, setIsLoaded] = useState(false);
  const [content, setContent] = useState(null);

  const sliderItems = [
    { image: carouselOne, text: "Check Valet Private Event Deposit One" },
    { image: carouselTwo, text: "Check Valet Private Event Deposit Two" },
    { image: carouselThree, text: "Check Valet Private Event Deposit three" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    rtl: true,
    arrows: false,
    afterChange: (index) => handleImageChange(index),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const handleImageChange = (index) => {
    const newImage = sliderItems[index % sliderItems.length].image;
    setIsLoaded(false);
    setCurrentEventImage(newImage);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const homePage = async () => {
    try {
      const data = await apiRequest('GET', `/page/7`);
      setContent(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    homePage();
  }, []);

  const sliderReftwo = useRef(null);

  const settingstwo = {
    rtl: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };
  

  const goToPrev = () => {
    sliderReftwo.current.slickPrev();
  };

  const goToNext = () => {
    sliderReftwo.current.slickNext();
  };

  return (
    <>
      <section className="hero-section" style={{ backgroundImage: `url(${seperataURL(content?.banner?.banner_image)})` }}>
        <Container fluid>
          {content?.banner && (
            <div className="wrap">
              <div className="content-bx">
                <span>{content?.banner?.top_title}</span>
                <h1 dangerouslySetInnerHTML={{ __html: `${content?.banner?.banner_title}` }} />
                <p>{content?.banner?.banner_desciption}</p>
                <div className="btn-wrap">
                  <a onClick={()=>router.push("/reservation")} className="cl-btn">{content?.banner?.button_one_link?.title}</a>
                  <a href="#" className="wh-btn">{content?.banner?.button_two_link?.title}</a>
                </div>
              </div>
              <span className="time-tag v-one p-one"><small>1</small> $ 2.01/h</span>
              <span className="time-tag v-one p-two"><small>1</small> $ 2.01/h</span>
              <span className="time-tag v-two p-three"><small>1</small> $ 2.01/h</span>
            </div>
          )}
        </Container>
      </section>

      <section className="home-f-events">
        <div className="f-wrap">
          <div className="f-box l-event">
            <div className="txt-content-gap">
              <div className="txt-content">
                <h2>Featured Events</h2>
                <p>Premium Valet Parking Solutions: Providing Luxurious Services while Enhancing your Convenience.</p>
                <a onClick={()=>router.push('/events')} className="f-btn">View All</a>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="carousel-container">
              <Slider ref={sliderRef} {...settings}>
                {sliderItems.map((item, idx) => (
                  <div className="item" key={idx}>
                    <img src={item.image.src} alt={`carousel-${idx}`} />
                    <p>{item.text}</p>
                  </div>
                ))}
              </Slider>
            </div>
              {/* Custom Navigation Buttons */}
              <div className="custom-nav">
                <div className="prev-btn" onClick={prevSlide}>
                  <button className="arrow-button">
                    <img src={leftArrow.src} alt="nav" />
                  </button>
                </div>
                <div className="next-btn" onClick={nextSlide}>
                  <button className="arrow-button">
                    <img src={rightArrow.src} alt="nav" />
                  </button>
                </div>
              </div>
          </div>

          {/* Event Image (updates based on the slider) */}
          <div className="f-box r-event">
            <img
              src={currentEventImage.src}
              alt="event"
              onLoad={handleImageLoad} // Trigger when the image has loaded
              className={isLoaded ? "loaded" : ""} // Apply loaded class for animation
            />
            <div className="shp-bx">
              <span>Free Shipping</span>
              <h5>Strong Island Fight Night's Valet Parking</h5>
              <b>$ 20.00</b>
              <a onClick={()=>router.push('/reservation')} className="f-btn">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Home-services */}
      <section className="h-services">
        <div className="s-wrap">
          <Container fluid>
            <Row>
              <Col col={12} md={6}>
                <div className="img-con-bx">
                  <h4>{content?.valet_services_drivers?.title}</h4>
                  <p className="text-center">{content?.valet_services_drivers?.content}</p>
                  <img src={servicecar.src} alt="service" />
                  <p className="btm-title">{content?.valet_services_drivers?.content_after_image}</p>
                </div>
              </Col>
              <Col col={12} md={6}>
                <ul>
                  {content?.valet_services_drivers?.services?.map((data, index) => (
                    <li key={index}>
                      <b>{data?.title}</b>
                      <p>{data?.description}</p>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Partner-restaurants */}
      <section className="Partner-restaurants">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between">
            <h2>Partner Restaurants</h2>
            <div className="custom-nav-wrap">
              <div>
                <button onClick={goToPrev}>
                  <img src={leftArrow.src} alt="Previous" />
                </button>
              </div>
              <div>
                <button onClick={goToNext}>
                  <img src={rightArrow.src} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </Container>

        <Slider className="Partner-slider" ref={sliderReftwo} {...settingstwo}>
          <div className="slider-item">
            <img src={psliderone.src} alt="partner one" />
            <div className="slider-des">
              <h6>That MeetBall Place</h6>
              <p>
              Enjoy a modern twist on classic comfort foods, from handcrafted meatballs to artisan pizzas and gourmet salads, all in a warm and inviting atmosphere.
              </p>

              <a onClick={()=>flashmsg()}>
                Book Your Reservation <img src={linkicon.src} alt="link" />
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img src={pslidertwo.src} alt="partner two" />
            <div className="slider-des">
              <h6>That MeetBall Place</h6>
              <p>
              Enjoy a modern twist on classic comfort foods, from handcrafted meatballs to artisan pizzas and gourmet salads, all in a warm and inviting atmosphere.
              </p>

              <a onClick={()=>flashmsg()}>
                Book Your Reservation <img src={linkicon.src} alt="link" />
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img src={psliderthree.src} alt="partner three" />
            <div className="slider-des">
              <h6>That MeetBall Place</h6>
              <p>
              Enjoy a modern twist on classic comfort foods, from handcrafted meatballs to artisan pizzas and gourmet salads, all in a warm and inviting atmosphere.
              </p>

              <a onClick={()=>flashmsg()}>
                Book Your Reservation <img src={linkicon.src} alt="link" />
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img src={psliderfour.src} alt="partner four" />
            <div className="slider-des">
              <h6>That MeetBall Place</h6>
              <p>
              Enjoy a modern twist on classic comfort foods, from handcrafted meatballs to artisan pizzas and gourmet salads, all in a warm and inviting atmosphere.
              </p>

              <a onClick={()=>flashmsg()}>
                Book Your Reservation <img src={linkicon.src} alt="link" />
              </a>
            </div>
          </div>
        </Slider>
      </section>

      {/* App Download Section */}
      <section className="download-app">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="app-det">
                <h2>Download the Check Valet app</h2>
                <p>Use check valet to park your car conveniently and easily.</p>
                <div className="btn-wrap">
                  <a href="#">
                    {" "}
                    <img src={appstore.src} alt="app" />{" "}
                  </a>
                  <a href="#">
                    {" "}
                    <img src={playstore.src} alt="app" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="app-view">  <img src={appview.src} alt="appview" /></div>
            
            </Col>
          </Row>
        </Container>
        <Button
          className="floating-btn"
          onClick={() => alert("Floating Button Clicked")}
        >
          Book Now
        </Button>
      </section>
    </>
  );
};

export default Home;
