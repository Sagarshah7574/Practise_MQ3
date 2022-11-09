import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Vector3 from "../../../assets/images/Vector3.png"
import talk from "../../../assets/images/talk.png"
const LetsTalk = () => {
  return (
    <section>
     <div className="lets-talk area">
        <Container>
            <Row>
                <Col xl="6" lg="6" md="12" sm="12">
                 <div className="title-text lets-talk">
                   <h3>let's talk</h3>
                   <p>Have a project in mind?</p> 
                  <h2>
                 We`re excited to hear 
                 about Your brand!
                 </h2>
                 <button className="readmore-btn talk">Read More
                  <img src={Vector3} alt="arrow-img" />
                  </button>
                 </div>
                </Col>
                <Col xl="6" lg="6" md="12" sm="12">
                  <div className="talk-img"> 
                  <img src={talk} alt="talkimg" />
                  </div>
                </Col>

            </Row>
        </Container>
     </div>
    </section>
  )
}

export default LetsTalk