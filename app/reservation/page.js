'use client'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import strongIsland from '../assets/images/strong-island.png';
import partnerone from '../assets/images/partner-one.png';
import partnertwo from '../assets/images/partner-two.png';
import partnerthree from '../assets/images/partner-three.png';
import partnerfour from '../assets/images/partner-four.png';
import partnerfive from '../assets/images/partner-five.png';
import partnersix from '../assets/images/partner-six.png';
import ReservationCards from '../components/ReservationCards';
import innerbanner from '../assets/images/inner-banner.png';
import { useRouter } from 'next/navigation';
import Pagination from 'react-bootstrap/Pagination';

const Reservation = () => {
  const arrayValues = [
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: strongIsland },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 22, time: "5min", image: partnersix },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 10, time: "5min", image: partnerfive },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 50, time: "5min", image: partnerfour },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnerfive },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 70, time: "5min", image: partnerthree },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnertwo },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 21, time: "5min", image: partnerfour },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 30, time: "5min", image: partnerfive },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 40, time: "5min", image: partnerthree },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnerone },
    { title: "Patchogue Valet & Parking Service - 3 Hour Limit", description: "To guarantee service, please make your reservation at least 24 hours in advance. Last reservations are taken at 11 pm. If your reservation exceeds th…", price: 20, time: "5min", image: partnerfour },
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
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
                <Col md={4}
                  key={index}
                  className="mb-5"
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
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
          </Pagination>

        </Container>
      </section>
    </>
  );
};

export default Reservation;
