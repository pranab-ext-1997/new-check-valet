import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Col, Form, Row } from "react-bootstrap";
import Image from "next/image";

const CalenderModal = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [booking,setBooking]=useState(
    {
      "date":"",
      "slot":"",
      "package_id":2,
      "amount":null,
      "customer":{
        "first_name":"",
        "last_name":"",
        "phone":"",
        "email":""
      },
      "vehicle":{
        "license_plate_no":"",
        "description":"",
        "color":""
      },
      "card":{
        "card_no":"",
        "expiry":"",
        "cvv":""
      }
    }
  )


const checkDataValidation=(number)=>{
//   if(selectedDate!==null && selectedTime!==null){
//     if(number===1)
//     setStep(number+1)
//   }
// else{
//   alert("Please add and all Info")
// }
setStep(number+1)
}


  

  const times = [
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-container"
    >
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
                    Make a reservation
                </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg={6}>
            <div className="mdl-title">
              <h2> Make a reservation</h2>
            </div>
            <div>
              <div className="modal-img">
              <Image
                       src={props?.data?.image}
                        alt={props?.data?.image} 
                    />
                {/* <img src={props?.data?.image} alt="Chops Valet" /> */}
              </div>
              <div className="mdl-content">
                <h5>{props?.data?.title}</h5>
                <span>
                  {props?.data?.time} | ${props?.data?.price}
                </span>
                <strong>
                  PLEASE MEET VALET DIRECTLY BEHIND CHOPS IN MUNICIPAL LOT 6.
                </strong>
                <p>{props?.data?.description}</p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mdl-rght">
              {step === 1 && (
                <StepOne
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  times={times}
                />
              )}
              {step === 2 && <StepTwo booking={booking} setBooking={setBooking} />}
              {step === 3 && <StepThree />}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              {step !== 1 && (
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setStep(step - 1)}
                >
                  Prev
                </Button>
              )}
              {step <= 2 && (
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => setStep(step+1)}
                  className="nxt-btn"
                >
                  Next
                </Button>
              )}
              {step === 3 && (
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => alert("Payment Successfull")}
                >
                  Make Payment
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CalenderModal;

export const StepOne = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  times,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="mdl-title">
        <h5>Select Date</h5>
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        minDate={new Date()}
      />

      <h4>Select Time</h4>
      <div className="time-selection">
        {times.map((time, index) => (
          <Button
            size="lg"
            key={index}
            variant={selectedTime === time ? "primary" : "outline-secondary"}
            onClick={() => setSelectedTime(time)}
            style={{ margin: "5px" }}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const StepTwo = ({booking,setBooking}) => {
  const times = [
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleModel: "",
    vehicleNumber: "",
    vehicleColor: "",
    customAmount: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault(); 
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  
  e.preventDefault()
  console.log(formData,"PRURURURURURURUR");
  
  };
  console.log("submitted:", formData);
  return (
    <div className="customer-details">
      <div className="mdl-title">
        <h5>Customer And Vehicle Details</h5>
      </div>

      <Form onSubmit={handleSubmit}>
        <h6>Add your details</h6>
        <Row className="gy-2 mb-4">
          <Col md={6}>
            <Form.Group controlId="formFirstName">
              <Form.Control
                placeholder="First name*"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formLastName">
              <Form.Control
                placeholder="Last name*"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formEmail">
              <Form.Control
                placeholder="Email*"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formPhone">
              <Form.Control
                placeholder="Phone*"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <h6>Add Your Vehicle Details</h6>
        <Row className="gy-2 mb-4">
          <Col md={12}>
            <Form.Group controlId="formVehicleModel">
              <Form.Control
                placeholder="Vehicle Model*"
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formVehicleNumber">
              <Form.Control
                placeholder="Vehicle Number*"
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="ful-w" controlId="formVehicleColor">
              <Form.Control
                placeholder="Vehicle Color"
                as="select"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={handleInputChange}
              >
                <option>Choose color</option>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* <h5 style={{ marginTop: "20px" }}>Select Time</h5>
        <div className="time-selection">
          {times.map((time, index) => (
            <Button
              size="lg"
              key={index}
              variant={"outline-secondary"}
              style={{ margin: "5px" }}
            >
              {time}
            </Button>
          ))}
        </div> */}

        {/* <Row className="gy-2 mb-4 mt-4">
          <Col md={12}>
            <Form.Control
              type="number"
              name="customAmount"
              placeholder="customAmount"
              value={formData.customAmount}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <h6>Enter Custom Amount</h6>
        <Row className="gy-2 mb-4">
          <Col md={12}>
            <Form.Group className="ful-w" controlId="formCustomAmount">
              <Form.Control
                type="number"
                name="customAmount"
                placeholder="Enter Amount"
                value={formData.customAmount}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row> */}
      </Form>
    </div>
  );
};

export const StepThree = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleModel: "",
    vehicleNumber: "",
    vehicleColor: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call)
    console.log("Form data submitted:", formData);
  };
  return (
    <>
      <div className="payment-section">
        {/* Payment Summary */}
        <div className="payment-summary">
          <div className="mdl-title">
            <h5>Make Payment</h5>
          </div>

          <div className="payment-d-container">
            <strong>Payment Details</strong>
            <div className="payment-details">
              <p>
                Subtotal: <span>$34.00</span>
              </p>
              <p>
                Tax: <span>$2.00</span>
              </p>

              <p className="ftr">
                <h4>Total:</h4> <h4>$36.00</h4>
              </p>
            </div>

            {/* Payment Form */}
            <strong>Payment Details</strong>
            <Form>
              <Row className="gy-2 mb-4">
                <Col md={12}>
                  <Form.Group controlId="formCardNumber">
                    <h6>Pay With Card</h6>

                    <Form.Control
                      type="text"
                      placeholder="Card Number*"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formExpiryDate">
                    <Form.Control
                      type="text"
                      placeholder="MM/YY*"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCVV">
                    <Form.Control
                      type="text"
                      placeholder="CVV*"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formSaveCard">
                <Form.Check
                  type="checkbox"
                  label="Save Your Card"
                  name="saveCard"
                  checked={formData.saveCard}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>

            <p className="disclaimer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
