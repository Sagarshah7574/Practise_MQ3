import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import Vector3 from "../../assets/images/Vector3.png"

const ContactForm = () => {
  return (
    <div>
      <Form className="form-box" content-Type="multipart/formdata">
        <div className="contact-card-box">
          <Row>
            <Col lg="6" md="6" sm="12">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  className="form-controller"
                />
              </Form.Group>
            </Col>
            <Col lg="6" md="6" sm="12">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="form-controller"
                />
              </Form.Group>
            </Col>
            <Col lg="6" md="6" sm="12">
              <Form.Group controlId="formBasicContact">
                <Form.Control
                  type="text"
                  placeholder="Contact No."
                  className="form-controller"
                />
              </Form.Group>
            </Col>
            <Col lg="6" md="6" sm="12">
              <Form.Select
                aria-label="Default select example"
                className="form-controller options"
              >
                <option>What are you looking for?</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col lg="12" md="12" sm="12">
              <Form.Group size="lg" controlId="ControlTextarea1">
                <Form.Control
                  type="textarea"
                  placeholder="Message"
                  className="form-controller"
                />
              </Form.Group>
            </Col>
            <div>
              <button className="sendmessage-btn">
                SEND MESSAGE
                <img src={Vector3} alt="arrow-img" />
              </button>
            </div>
          </Row>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
