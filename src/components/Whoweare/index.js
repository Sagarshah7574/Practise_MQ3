import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Mq from"../../assets/images/Mq.png"

const Whoweare = () => {
  return (
   <section>
    <div className="whoweare-area spacer">
      <Container>
        <Row>
         <Col>
           <div className='title-text'>
            <h3>WHO WE ARE?</h3>
          </div>
         </Col>
        </Row>
        <Row>
          <Col xl="6" lg="6" md="12" sm="12">
            <img src={Mq} alt="mq" className="mq-img"/>
          </Col>
          <Col xl="6" lg="6" md="12" sm="12">
             <div className="whoweare-content">
              <h2>
                India's Leading Web,
                <br/>
                Enterprise Software &Mobile
                <br/>
                App Development Company
              </h2>
              <p>
              We are team of extremely talented web and mobile app developers who have come together to build exceptional software for our clients all over the world. Our goal is to build the future for our clients,helping them automate their businesses, engage their customers and change the world. We will be your trusted tech partner, bringing your idea to reality. 
              </p>
             </div>
          </Col>
          <Col>
            <div className="company-info">
              <div className="projects">
                <h2>110+</h2>
                <p>Projects Completed</p>
              </div>
              <div className="specialist">
                <h2>100+</h2>
                <p>Specialist</p>
              </div>
              <div className="experiance">
                <h2>5+</h2>
                <p>Years Of Experience</p>
              </div>
              <div className="client">
                <h2>100+</h2>
                <p>Happy Client </p>
              </div>
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
   </section>
    
  )
}

export default Whoweare