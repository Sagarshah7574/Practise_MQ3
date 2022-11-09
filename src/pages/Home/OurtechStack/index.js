import React from "react"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import { titleData } from "./ourtechstackdata"

const OurtechStack = () => {
  return (
    <section>
      <div className="tech-stack section">
        <Container>
          <Row>
            <Col>
              <div className="tech-stack title-text">
                <h3>Our Tech Stack</h3>
                <p>
                  With the power of these tools we help you embed complete tech
                  excellence in your web ormobile app development project.
                  Leverage our expertise and reap the complete
                </p>
              </div>
            </Col>
          </Row>
          <Tab.Container id="left-tabs-example" defaultActiveKey="MOBILE">
            <Row className="justify-content-center-align-items-center">
              <Col lg="4" md="12" sm="12">
                <Nav variant="pills" className="techstack-tabs flex-column">
                  <Nav.Item>
                    {titleData.map((titledata, index) => {
                      return (
                        <Nav.Link eventKey={titledata.eventKey} key={index}>
                          <h5>{titledata.title}</h5>
                        </Nav.Link>
                      )
                    })}
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg="8" md="12" sm="12">
                <Tab.Content>
                  {titleData.map((techdata, index) => {
                    return (
                      <Tab.Pane
                        eventKey={techdata.eventKey}
                        key={`tab-pan${index}`}
                      >
                        <div className="tech-whole-box">
                          {techdata.data.map((tech, index) => {
                            return (
                              <div
                                className="tech-part"
                                key={`tech-part${index}`}
                              >
                                <div className="tech-box">
                                  <div className="animate-box">
                                    <div className="box-1 comman"></div>
                                    <div className="box-2 comman"></div>
                                    <div className="box-3 comman"></div>
                                    <div className="box-4 comman"></div>
                                  </div>
                                  <div className="framework-text-box">
                                    <div className="tech-image">
                                      <img
                                        src={tech.imgurl}
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="tech-text">
                                      <h4>{tech.title}</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </Tab.Pane>
                    )
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </section>
  )
}

export default OurtechStack
