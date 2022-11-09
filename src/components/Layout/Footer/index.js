import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "../../contactform"
import Mqicon2 from "../../../assets/images/Mqicon2.png"
import mail from "../../../assets/images/mail.svg"
import skype from "../../../assets/images/skype.svg"
import call from "../../../assets/images/call.svg"
import whtsapp from "../../../assets/images/whtsapp.svg"
import unity from "../../../assets/images/unity.png"
import germany from "../../../assets/images/germany.png"
import usimg from "../../../assets/images/usimg.png"
import badge1 from "../../../assets/images/badge1.png"
import badge2 from "../../../assets/images/badge2.png"
import badge3 from "../../../assets/images/badge3.png"
import badge4 from "../../../assets/images/badge4.png"
import badge5 from "../../../assets/images/badge5.png"
import dmca from "../../../assets/images/dmca.png"
import { home } from "../../../config/routeConstant"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import {
  FaBehanceSquare,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
const Footer = () => {
  return (
    <section>
      <div className="footer-area">
        <Container>
          <Row>
            <Col lg="6" md="12" sm="12">
              <div className="footer-box">
                <div className="title-text footer">
                  <h3>We are here to help you </h3>
                  <h2>
                    Let’s Transform <br />
                    Your Vision Into <br />
                    Value.
                  </h2>
                </div>
              </div>
            </Col>
            <Col lg="6" md="12" sm="12">
              <div className="awesome-product box">
                <div className="product-text title">
                  <h2>Let's Create Awesome Products</h2>
                </div>
                <ContactForm />
              </div>
            </Col>
          </Row>
          <div className="footer-second part">
            <Row>
              <Col lg="3" md="6" sm="12">
                <div className="footer-part">
                  <div className="footer-link-box">
                    <div className="footer-title">
                      <h3>QUICK LINK</h3>
                    </div>
                    <ul className="footer-links">
                      <li>Careers</li>
                      <li>Contact us</li>
                      <li>Blog</li>
                      <li>portfolio</li>
                      <li>site map</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="footer-part">
                  <div className="footer-link-box">
                    <div className="footer-title">
                      <h3>SERVICES</h3>
                    </div>
                    <ul className="footer-links">
                      <li>Mobile App Services</li>
                      <li>Web Services</li>
                      <li>Fronted Services</li>
                      <li>Backend Services</li>
                      <li>CMS Services</li>
                      <li>UI/UX Services</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="footer-part">
                  <div className="footer-link-box">
                    <div className="footer-title">
                      <h3>HIRE DEVELOPERS</h3>
                    </div>
                    <ul className="footer-links">
                      <li>Hire Mobile App Developer</li>
                      <li>Hire Full Stack Developers</li>
                      <li>Hire MEAN Stack Developer</li>
                      <li>Hire NodeJS Developers</li>
                      <li>Hire MERN Stack Developer</li>
                      <li>Hire GoLang Developer</li>
                      <li>Hire UI/UX Desinger</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="6" sm="12">
                <div className="footer-part">
                  <div className="footer-link-box">
                    <div className="footer-title">
                      <h3>SOLUTION</h3>
                    </div>
                    <ul className="footer-links">
                      <li>On-demand Solutions</li>
                      <li>Online Grocery Store App</li>
                      <li>Food Delivery App</li>
                      <li>eCommerce Fashion Store App</li>
                      <li>eLearning Education App</li>
                      <li>Marketplace App</li>
                      <li>SolutionPayment Wallet App</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-third-part">
            <div className="footer-call-box">
              <div className="call-link-box">
                <div className="footer-logo">
                  <img src={Mqicon2} alt="footerlogo" />
                </div>
              </div>
              <div className="call-link-box">
                <Link to={home}>
                  <span>
                    <img src={mail} alt="footerlogo" />
                  </span>
                  biz@multiqos.com
                </Link>
              </div>
              <div className="call-link-box">
                <Link to={home}>
                  <span>
                    <img src={skype} alt="footerlogo" />
                  </span>
                  biz@multiqos.com
                </Link>
              </div>

              <div className="call-link-box">
                <Link to={home}>
                  <span>
                    <img src={call} alt="footerlogo" />
                  </span>
                  India +91 88666 87330
                </Link>
              </div>
              <div className="call-link-box">
                <Link to={home}>
                  <span>
                    <img src={whtsapp} alt="footerlogo" />
                  </span>
                  India +91 88666 87330
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-fourth-part">
            <Row>
              <Col lg="4" md="6" sm="12">
                <div className="office-country-box">
                  <div className="office-image">
                    <img src={unity} alt="ind-img" className="img-ind" />
                  </div>
                  <div className="office-text">
                    <h3>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      India
                    </h3>
                    <p>624, Gala Empire, Gurukul, Ahmedabad, Gujarat 380052</p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                      </span>
                      <a href="/">+91 88666 87330</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="12">
                <div className="office-country-box">
                  <div className="office-image">
                    <img src={germany} alt="ind-img" className="img-germany" />
                  </div>
                  <div className="office-text">
                    <h3>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      Germany
                    </h3>
                    <p>Thomas Jefferson Street 41, 68309 Mannheim, Germany</p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                      </span>
                      <a href="/">+49 151 660 29809</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="6" sm="12">
                <div className="office-country-box">
                  <div className="office-image">
                    <img src={usimg} alt="us-img" className="img-us" />
                  </div>
                  <div className="office-text">
                    <h3>
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      United States
                    </h3>
                    <p>150 E Beech Drive, Schaumburg, IL 60193</p>
                    <p>
                      <span>
                        <FontAwesomeIcon icon={faMobileScreenButton} />
                      </span>
                      <a href="/">+1 309 247 5073</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="footer-fifth-part">
              <Row className="justify-content-center align-items-center">
                <Col lg="6" md="12" sm="12">
                  <div className="badges-box">
                    <Link to={"/"}>
                      <img src={badge1} alt="" />
                    </Link>
                    <Link to={"/"}>
                      <img src={badge2} alt="" />
                    </Link>
                    <Link to={"/"}>
                      <img src={badge3} alt="" />
                    </Link>
                    <Link to={"/"}>
                      <img src={badge4} alt="" />
                    </Link>
                    <Link to={"/"}>
                      <img src={badge5} alt="" />
                    </Link>
                  </div>
                </Col>

                <Col lg="6" md="12" sm="12">
                  <div className="social-icons">
                    <a href="#">
                      <span className="follow"></span>Follow us
                    </a>
                    <a href="#">
                      <span>
                        <FaLinkedinIn />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaFacebookF />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaDribbble />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaTwitter />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaInstagram />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaYoutube />
                      </span>
                    </a>
                    <a href="#">
                      <span>
                        <FaBehanceSquare />
                      </span>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer-sixth-part">
            <div className="footer-bottom-line">
              <div className="copyright-text">
                <p>
                © 2022 MultiQoS Technologies Pvt. Ltd. All rights reserved.
                </p>
              </div>
              <div className="site-protection">
                <img src={dmca} alt="protection-img"/>
              </div>
              <div className="privacy-policy">
                <a href="/">Privacy Policy</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Footer
