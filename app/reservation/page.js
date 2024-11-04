'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import strongIsland from '../assets/images/strong-island.png';
import partnerone from '../assets/images/one.png';
import partnertwo from '../assets/images/two.png';
import partnerthree from '../assets/images/three.png';
import partnerfour from '../assets/images/four.png';
import partnerfive from '../assets/images/five.png';
import partnersix from '../assets/images/six.png';
import ReservationCards from '../components/ReservationCards';
import innerbanner from '../assets/images/inner-banner.png';
import reservationbtm from '../assets/images/reservation-btm.png';
import { useRouter } from 'next/navigation';
import Pagination from 'react-bootstrap/Pagination';

const Reservation = () => {
  const arrayValues = [
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: strongIsland },
    { title: "Chops Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 22, time: "5min", image: partnersix },
    { title: "Gallo Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 10, time: "5min", image: partnerfive },
    { title: "Jardin's Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 50, time: "5min", image: partnerfour },
    { title: "MeetBall Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnerfive },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 70, time: "5min", image: partnerthree },
    { title: "Arooga's Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnertwo },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 21, time: "5min", image: partnerfour },
    { title: "Arooga's Valet & Parking Service", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 40, time: "5min", image: partnerthree },
  ];

  const router = useRouter();

  return (
    <>
      <section
        className="inner-banner reservation-bnr"
        style={{ backgroundImage: `url(${innerbanner.src})` }}
      >
        <Container>
          <h1>Make A Reservation</h1>
          <p>
          Our Luxury Bridal Valet Service provides an elegant and seamless arrival experience for weddings. From red carpet entry for the bridal party to attentive service for guests, we ensure every detail enhances the special day.
          </p>
        </Container>
      </section>
      <section className="online-reservation">
        <Container>
          <div>
            <div className="txt-bx">
              <h2>Online Reservation</h2>
              <h4>Patchogue Valet Services</h4>
            </div>

            <Row className="gx-4">

              {arrayValues.map((val, index) => (
                <Col lg={4} md={6}
                  key={index}
                  className="mb-3 mb-md-3 mb-lg-4"
                >
                  <div>
                    <ReservationCards val={val} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            {/* <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Ellipsis /> */}
            <Pagination.Next />
          </Pagination>

        </Container>
      </section>

      <section className="reservation-btm"  style={{ backgroundImage: `url(${reservationbtm.src})` }}>
        <Container>
          <p> by clicking SUBMIT you consent to receiving SMS messages. Messages and Data rates may apply. Message frequency will vary. Reply Help to get more assistance. Reply Stop to Opt-out of messaging" </p>
        </Container>
      </section>
    </>
  );
};

export default Reservation;
