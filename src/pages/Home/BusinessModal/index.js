import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Tndmaterial from "../../../assets/images/Tndmaterial.png"
import fixed from "../../../assets/images/fixed.png"
import Dedicated from "../../../assets/images/Dedicated.png"
const BusinessModel = () => {
  return (
    <section>
      <div className="business-modal section">
        <Container>
          <Row>
            <Col>
              <div className="title-text business-modal">
                <h3>Business Models</h3>
                <p>Cooperation models</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
             <div className="modal-wrap">  
              <div className="fixed-price">
                <img src={fixed} alt="" />
                <h3>Fixed-Price</h3>
                <p>
                  We help our clients stay in complete Control over the cost vs
                  expectations from an app project with the fixed price model.
                </p>
              </div>
              <div className="Time-and-material">
                <img src={Tndmaterial} alt="" />
                <h3>Time and Material</h3>
                <p>
                  We help our clients stay flexible in terms of hiring developer
                  resources based on the evolving project needs through the...
                </p>
              </div>
              <div className="dedicated">
                <img src={Dedicated} alt="" />
                <h3>Dedicated</h3>
                <p>
                  We help our clients to take advantage of integrating the most
                  accomplished developer talents with the...
                </p>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default BusinessModel
