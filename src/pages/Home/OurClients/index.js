import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Gdg from "../../../assets/images/Gdg.png"
import Eleroad from "../../../assets/images/Eleroad.png"
import twklp from "../../../assets/images/twklp.png"
import aditurix from "../../../assets/images/aditurix.png"
import pollogo from "../../../assets/images/pollogo.png"
import juleb from "../../../assets/images/juleb.png"
import queso from "../../../assets/images/queso.png"
import obelis from "../../../assets/images/obelis.png"
import screens from "../../../assets/images/screens.png"
import stepsecure from "../../../assets/images/stepsecure.png"
import mrsnark from "../../../assets/images/mrsnark.png"
import phoenix from "../../../assets/images/phoenix.png"


const OurClients = () => {
  return (
    <section>
      <div className="our-clients section">
        <Container>
          <Row>
            <Col>
              <div className="title-text our-clients">
                <h3>our clients</h3>
                <p>They trust us</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="client-details area">
                <div className="company-logos">
                  <div>
                    <img src={Gdg} alt="" />
                  </div>
                  <div>
                    <img src={Eleroad} alt="" />
                  </div>
                  <div>
                    <img src={twklp} alt="" />
                  </div>
                  <div>
                    <img src={aditurix} alt="" />
                  </div>
                  <div>
                    <img src={pollogo} alt=""/>
                  </div>
                  <div>
                    <img src={juleb} alt=""/>
                  </div>
                  <div>
                    <img src={queso} alt=""/>
                  </div>
                  <div>
                    <img src={obelis} alt=""/>
                  </div>
                  <div>
                    <img src={screens} alt=""/>
                  </div>
                  <div>
                    <img src={stepsecure} alt=""/>
                  </div>
                  <div>
                    <img src={mrsnark} alt=""/>
                  </div>
                  <div>
                    <img src={phoenix} alt=""/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default OurClients
