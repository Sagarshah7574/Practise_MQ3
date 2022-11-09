import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Vector3 from "../../../assets/images/Vector3.png"
const HireDeveloper = () => {
  return (
    <section>
      <div className="hire-developer section">
        <Container>
          <div className="hire-developer area">
            <Row>
              <Col>
                <div className="title-text hire-developers">
                  <h3>hire dedicated developers</h3>
                  <p>
                    With the power of these tools we help you embed complete
                    tech excellence in your web ormobile app development
                    project. Leverage our expertise and reap the complete
                  </p>
                  <h1>Hire Dedicated<br/>
                  <span>Developers</span></h1>
                  <button className="readmore-btn">Read More
                  <img src={Vector3} alt="arrow-img" />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default HireDeveloper
