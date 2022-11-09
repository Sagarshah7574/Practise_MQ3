import React from "react"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"

import { imgData, navItemdata, ourServicedata } from "./ourservicedata"
import Vector3 from "../../../assets/images/Vector3.png"

const OurService = () => {
  return (
    <section className="service-area spacer">
      <Container>
        <div className="Rectangle">
          <Row>
            <Col>
              <div className="title-text service">
                <h3>Our service</h3>
              </div>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="DESIGN">
            <Row>
              <Col xl="6" lg="6" md="12" sm="12">
                <Tab.Content>
                  {ourServicedata.map((service, index) => {
                    return (
                      <Tab.Pane
                        eventKey={service.eventKey}
                        key={`ourServices-${index}`}
                      >
                        <div className="service-text">
                          <h2>{service.content1}</h2>
                          <br />
                          <h2>{service.content2}</h2>
                          <p>{service.description}</p>
                        </div>
                        <>
                          {imgData?.map((image, index) => {
                            return (
                              <div key={`link-${index}`} className="img-section">
                                <div className="tech-imges">
                                  <img src={image.imageurl} alt="figma" />
                                </div>
                                <div className="tech-text">
                                  <p>{image.imagedata}</p>
                                </div>
                              </div>
                            )
                          })}
                        </>
                        <div>
                          <button className="readmore-btn">
                            READ MORE
                           
                             <img src={Vector3} alt="arrow-img" />
                          </button>
                        </div>
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
              </Col>
              <Col lg="6" md="12" sm="12">
                <Nav variant="pills" className="project-tabs flex-column">
                  <Nav.Item>
                    {navItemdata.map((titledata, index) => {
                      return (
                        <Nav.Link
                          eventKey={titledata.eventKey}
                          key={`navItem-${index}`}
                        >
                          <h2>{titledata.title}</h2>
                          <p>{titledata.description}</p>
                        </Nav.Link>
                      )
                    })}
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
    </section>
  )
}

export default OurService
