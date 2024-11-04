"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CalenderModal from "./CalenderModal";
import Image from "next/image";

const ReservationCards = ({ val }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card>
        <figure>
        <Image
          src={val?.image}
          alt={val?.title}
          className="reservation-image"
        />
        </figure>
        <Card.Body>
          <Card.Title>{val?.title}</Card.Title>
          <Card.Text>
            {val?.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              <span>{val?.time}</span> | <span>${val?.price}</span>
            </h5>
            <Button onClick={() => setModalShow(true)} className="rounded-pill">
              Make Reservation
            </Button>
          </div>
        </Card.Body>
      </Card>
      <CalenderModal
        data={val}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ReservationCards;
