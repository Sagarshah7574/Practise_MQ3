import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import Path1 from "../../assets/images/Path 1.svg"
import pr1 from "../../assets/images/pr1.png"
// import text from "../../assets/images/text.png"

const TalktoExpert = () => {
  return (
    <div className="talk-to-expert" >
    <Container>
       <Row>
          <Col>
            <Card className="talk-to-expert-box">
              <div>     
              <img src={pr1} alt="pr1" className="back-image1"/>
              <img src={pr1} alt="pr1" className="back-image2"/>
              </div>
              <div className="expert-text">
                <h5>Build Fully Customized Logistics App With Us.</h5>
                {/* <img src={text} alt="text"/> */}
                <p>
                  Contact our transportation app development experts to know
                  more<br/>about your project in detail.
                </p>
              </div>
              <div className="btn-area">
                <button className="expert-btn">
                Talk To Our Experts
                <img src={Path1} alt="arrow-img" />
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      
    </Container>
    </div>
  )
}

export default TalktoExpert
