import React, { useState } from "react"
import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import Vector3 from "../../../assets/images/Vector3.png"
import { imagedata, navItemdata } from "./industriesdata"

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    // <section>
    //   <div className="industries-section">
    //     <Container>
    //       <Row>
    //         <Col>
    //           <div className="title-text industries">
    //             <h3>Industries</h3>
    //             <h2>Top Industries We Serve</h2>
    //           </div>
    //           <div className="view-allindustries btn">
    //             <button className="common-btn">
    //               VIEW ALL INDUSTRIES
    //               <img src={Vector3} alt="arrow-img" />
    //             </button>
    //           </div>
    //         </Col>
    //       </Row>
    //       <div className="industries-area">
    //         <div className="industries-details">
    //           <Row>
    //             <Col lg="6" md="12" sm="12">
    //               <div className="industries-tabs flex-column">
    //                 <div>
    //                   {Industrydata.map((titledata, index) => {
    //                     return (
    //                       <Industrytitle
    //                         title={titledata}
    //                         setActiveIndex={setActiveIndex}
    //                         index={index}
    //                         activeIndex={index === activeIndex}
    //                         key={index}
    //                       />
    //                     )
    //                   })}
    //                 </div>
    //               </div>
    //             </Col>
    //             <Col lg="6" md="12" sm="12">
    //               <div className="hide">
    //                 {imagedata.map((industry, index) => {
    //                   const isActive = index === activeIndex
    //                   return (
    //                     <>
    //                       <div className="industry-img-text">
    //                         <p>{industry.imagedata}</p>
    //                       </div>
    //                       <Industryimage
    //                         url={industry.imageurl}
    //                         active={isActive}
    //                         alt="/"
    //                         key={index}
    //                       />
    //                     </>
    //                   )
    //                 })}
    //               </div>
    //             </Col>
    //           </Row>
    //         </div>
    //       </div>
    //     </Container>
    //   </div>
    // </section>
    <section>
      <div className="industries-section">
        <Container>
          <Row>
            <Col>
              <div className="title-text industries">
                <h3>Industries</h3>
                <h2>Top Industries We Serve</h2>
              </div>
              <div className="view-allindustries btn">
                <button className="common-btn">
                  VIEW ALL INDUSTRIES
                  <img src={Vector3} alt="arrow-img" />
                </button>
              </div>
            </Col>
          </Row>
          <div className="industries-area">
            <div className="industries-details">
              <Tab.Container id="left-tabs-example" defaultActiveKey="SPORT">
                <Row>
                  <Col xl="6" lg="6" md="12" sm="12">
                    <Nav
                      variant="pills"
                      className="industries-tabs flex-column"
                    >
                      <Nav.Item>
                        {navItemdata.map((industext, index) => {
                          return (
                            <Nav.Link
                              eventKey={industext.eventKey}
                              key={`navItem -${index}`}
                            >
                              <div
                                className="industries-title"
                                onMouseOver={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(0)}
                              >
                                <h3
                                  setActiveIndex={setActiveIndex}
                                  activeIndex={index === activeIndex}
                                  
                                >
                                  {industext.title}
                                </h3>
                              </div>
                            </Nav.Link>
                          )
                        })}
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col xl="6" lg="6" md="12" sm="12">
                    <Tab.Content>
                      {imagedata.map((indusdata, index) => {
                        const isActive = index === activeIndex
                        return (
                          <Tab.Pane
                            eventKey={indusdata.eventKey}
                            key={`imagedata-${index}`}
                            active={isActive}
                          >
                            <div className="image-text">
                              <p>{indusdata.imagedata}</p>
                            </div>
                            <div className="industries-image">
                              <img src={indusdata.imageurl} alt="indus-img"/>
                            </div>
                          </Tab.Pane>
                        )
                      })}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Industries
