'use client';
import React, { useRef, useState } from 'react';
import { Button, Container } from "react-bootstrap";
import Image from 'next/image';
import innerbanner from '../assets/images/inner-banner.png';
import valetone from '../assets/images/valet-one.png';
import valettwo from '../assets/images/valet-two.png';
import homevalet from '../assets/images/home-valet-bg.png';
import demoVideoPoster from "../assets/images/safe-home-video-thumb.png";
import demoVideo from "../assets/video/demo-video.mp4";
import playicon from "../assets/images/icon/play-white-icon.svg";
import pauseicon from "../assets/images/icon/pouse-white-icon.svg";

const Safehome = () => {
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
                            style={{ backgroundImage: `url(${innerbanner.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                     >
                            <Container>
                                   <h1>Safe Home Valet</h1>
                                   <p>
                                          Join us in our mission to promote safe transportation
                                   </p>
                            </Container>
                     </section>

                     {/* Valet Project Section */}
                     <section className="pt-100 pb-100 valet-project">
                            <div className="valet-container">
                                   <div className="img-side">
                                          <Image src={valetone} alt="Valet One" className="img-fluid" />
                                   </div>

                                   <div className="content-side">
                                          <h3>The Safe Home</h3>
                                          <div className="tx-ig-wrap">
                                                 <div>
                                                        <Image src={valettwo} alt="Valet" className="img-fluid" />
                                                 </div>
                                                 <div>
                                                        <strong>Valet Project</strong>
                                                        <p>By supporting The Safe Home Valet Project, you contribute to creating a safer community and preventing accidents caused by drunk driving.</p>
                                                        <a href="#" className="f-btn">Donate</a>
                                                 </div>
                                          </div>
                                   </div>

                            </div>
                     </section>

                     <section className="home-valet" style={{ backgroundImage: `url(${homevalet.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <Container fluid>
                                   <h2>Introducing The Safe Home Valet Project:</h2>
                                   <h6>Take Pride in Saying Goodbye to DWI, One Valet at a Time!</h6>
                                   <p>
                                          At Check Valet, we believe in giving back to the community and know we can make a difference.  Too many of us have had a traumatizing life experience because of drinking and driving. That's why, NOW with every Safe Home Valet Service and Check Valet Membership, a portion of the proceeds will directly be contributed to The Safe Home Valet Project. Our mission is to lower the Long Island DWI rate by 25% within 5 years.  We encourage local bars to pledge a certain number of "Safe Home Valets" every year. It costs $50 for a local Safe Home Valet (only $40 with any check valet mobile app membership) The app launches 12/15/23. With The Safe Home Valet Project, our local restaurants, and YOUR DONATIONS, how many Safe Home Valet's can you pledge? Help save lives and say goodbye to DWIs.  One valet at a time...
                                   </p>
                            </Container>
                     </section>

                     {/* Safe Home Video Section with Custom Play/Pause Button */}
                     <section className="safe-home-video">
                            <Container fluid>
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
                                                        alt={isPlaying ? 'Pause Icon' : 'Play Icon'}
                                                 />
                                          </Button>
                                   </div>
                            </Container>
                     </section>
              </>
       );
};

export default Safehome;
