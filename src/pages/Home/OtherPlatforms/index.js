import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import arrow2 from "../../../assets/images/arrow2.png"
import Be from "../../../assets/images/Be.png"
import Git from "../../../assets/images/Git.png"
import dribble from "../../../assets/images/dribble.png"
const OtherPlatforms = () => {
  return (
    <div>
        <section>
            <div className='other-platform area'>
                <Container>
                 <Row>
                  <Col>
                  <div className='title-text platform section'>
                    <h3>Other Platforms</h3>
                    <p>Our Work Proof Across a Variety of Domains</p>
                  </div>
                    
                  </Col>
                 </Row>
                 <Row>
                  <Col>
                  <div className="platform-content">
                    <div className="dribble-text"> 
                   <h1>Dribbble
                   <span><img src={dribble} alt=""/></span>
                   </h1>
                   </div>
                   <div className="behance-text"> 
                   <h1>Behance
                   <span>  
                   <img src={Be} alt="" />
                   </span>
                   </h1>
                   </div>
                   <div className="github-text">  
                   <h1>Github
                   <span>  
                   <img src={Git} alt=""/>
                   </span>
                   </h1>
                   </div>
                   </div>
                  </Col>
                 </Row>
                </Container>
            </div>
        </section>
    </div>
  )
}

export default OtherPlatforms