import React from "react"

import Multiqoslogo from "../../../assets/images/Multiqoslogo.svg"
import Vector3 from "../../../assets/images/Vector3.png"

import { Link } from "react-router-dom"
import { home } from "../../../config/routeConstant"
import {  Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap"

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <div className="header_area">
          <div className="mq-logo">
            <img src={Multiqoslogo} alt="logo-img" />
          </div>
          <Navbar expand="lg" className="header-box">
            <Container className="header-container" fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto header-menu">
                <NavItem>
                  <NavLink as={Link} to={home}>
                    Company
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Solution</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Hire Developers</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Industries</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to={"/"}>Blog</NavLink>
                </NavItem>
              </Nav>
              

              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div >
          <button className="contact-usbtn">Contact Us
                {/* <svg
                  className="arrow-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.236"
                  height="14.161"
                  viewBox="0 0 19.236 14.161"
                >
                  <path
                    d="M28.9,138.272h0l-5.967-5.939a1.142,1.142,0,0,0-1.611,1.619l4.007,3.987H11.142a1.142,1.142,0,1,0,0,2.284H25.328l-4.006,3.987a1.142,1.142,0,0,0,1.611,1.619L28.9,139.89h0A1.143,1.143,0,0,0,28.9,138.272Z"
                    transform="translate(-10 -132)"
                  />
                </svg> */}
                <img src={Vector3} alt="arrow-img" />
                  </button>{' '}
                
              </div>
        </div>
      </header>
    </div>
  )
}

export default Header
