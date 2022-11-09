import React from "react"
import Bannerimg from "../../../assets/images/Bannerimg.png"
import Vector3 from "../../../assets/images/Vector3.png"

import { Col, Container, Row } from "react-bootstrap"
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaLongArrowAltDown,
  FaTwitter,
} from "react-icons/fa"

const Banner = () => {
  return (
    <section>
      <div className="banner-area section spacer">
        <Container>
          <div className="social-icons">
            <span className="follow rotate">Follow +</span>

            <span>
              <FaLinkedinIn />
            </span>

            <span>
              <FaFacebookF />
            </span>

            <span>
              <FaTwitter />
            </span>

            <span>
              <FaDribbble />
            </span>

            <span className="scroll-down rotate">Scroll</span>

            <span className="down-arrow">
              <FaLongArrowAltDown />
            </span>
          </div>
          <Row className="justify-content-center align-items-center">
            <Col xl="6" lg="6" md="12" sm="12">
              <div className="banner-content">
                <h3>A Magical Journey From</h3>
                <h1>
                  DESIGN TO
                  <br />
                  DEVELOPMENT
                </h1>
                <h3>With Us</h3>
              </div>

              <div>
                <button className="getintouch-btn">
                  GET IN TOUCH
                  <img src={Vector3} alt="arrow-img" />
                </button>
              </div>
            </Col>
            <Col xl="6" lg="6" md="12" sm="12">
              <img src={Bannerimg} alt="bannerimg" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Banner
