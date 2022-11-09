import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import polished from "../../assets/images/polished.png"
import fashion from "../../assets/images/fashion.png"
import arrow1 from "../../assets/images/arrow1.png"
import game from "../../assets/images/game.png"
import polished2 from "../../assets/images/polished2.png"
import arrow3 from "../../assets/images/arrow3.png"
import polished3 from "../../assets/images/polished3.png"
import arrow2 from "../../assets/images/arrow2.png"
import ecommerce from "../../assets/images/ecommerce.png"

const OurPortfolio = () => {
  return (
    <section>
      <div className="our-portfolio-section spacer">
        <Container>
          <Row>
            <Col>
              <div className="title-text portfolio">
                <h3>our portfolio</h3>
                <p>Top Industries We Serve</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
                
                 <div className="portfolio-details">
                  <ul>
                    <li className="portfolio-box">
                       <h3>Polished</h3>
                       <img src={polished} alt="polished" className="polished" />
                       <p>Mobile App & website design, Development</p>
                    </li>
                     <li className="portfolio-box">
                        <h3>Fashion </h3>
                        <img src={fashion} alt="fashion" className="fashion" /> 
                        <p className="fashion-text">Mobile App & website design, Development</p>
                      </li>
                      <li className="portfolio-box">
                      <img src={arrow1} alt="ellipse" className="arrow1" />
                      </li>
                      <li className="portfolio-box">
                      <img src={arrow3} alt="ellipse" className="arrow3" />
                      </li>
                      <li className="portfolio-box">
                        <h3 className="polished-text">Polished</h3>
                        <img src={polished2} alt="polished2" className="polished2" />
                        <p className="polished-text">Mobile App & website design, Development</p>
                       </li>
                       <li className="portfolio-box gameday">
                         <h3>Game day</h3>
                         <img src={game} alt="game" className="game" />
                         <p>Mobile App & website design, Development</p>
                      </li> 
                      <li className="portfolio-box">
                         <h3>Polished</h3>
                         <img src={polished3} alt="polished3" className="polished3" />
                         <p>website design, Development</p>
                      </li> 
                      <li className="portfolio-box">
                      <img src={arrow2} alt="arrow2" className="arrow2" />
                      </li>
                      <li className="portfolio-box">
                         <h3>Fashion</h3>
                         <img src={ecommerce} alt="ecommerce" className="ecommerce" />
                         <p>website design, Development</p>
                      </li> 
                    </ul>
                 </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div className="portfolio-details2">
                <img src={arrow3} alt="arrow3" className="arrow3" />
                <h3>Polished</h3>
                <img src={polished2} alt="polished2" className="polished2" />
               
                <h3 className="gameday-text">Game day</h3>
                <img src={game} alt="game" className="game" />
              </div>
            </Col>
          </Row> */}
          {/* <Row>
            <Col>
              <div className="portfolio-details3">
                <h3 className="polished-text">Polished</h3>
                <img src={polished3} alt="polished3" className="polished3" />
             
                <img src={arrow2} alt="arrow2" className="arrow2" />
                <h3 className="fashion-text">Fashion</h3>
                <img src={ecommerce} alt="ecommerce" className="ecommerce" />
               
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </section>
  )
}

export default OurPortfolio
