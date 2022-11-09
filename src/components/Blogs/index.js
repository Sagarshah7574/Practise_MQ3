import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaAngleRight } from "react-icons/fa"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"

const Blogs = () => {
  return (
    <section>
      <div className="blogs-section">
        <Container>
          <Row>
            <Col>
              <div className="title-text blogs">
                <h3>OUR BLOG</h3>
                <h2>LOREM IPSUM IS SIMPLY DUMMY.</h2>
                <p>
                  Being technology freaks, we keep sharing the latest
                  technologies and their applications information
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="blog-wrap">
                <div className="cloud-blog">
                  <img src={blog1} alt="" />
                  <div>
                    <h4>
                      AWS vs Azure vs GCP – A Comparison of Top Cloud Providers
                    </h4>
                    <FaAngleRight className="icon" />
                  </div>
                </div>
                <div className="cloud-blog">
                  <img src={blog2} alt="" />
                  <div>
                    <h4>
                      AWS vs Azure vs GCP – A Comparison of Top Cloud Providers
                    </h4>
                    <FaAngleRight className="icon" />
                  </div>
                </div>
                <div className="cloud-blog">
                  <img src={blog1} alt="" />
                  <div>
                    <h4>
                      AWS vs Azure vs GCP – A Comparison of Top Cloud Providers
                    </h4>
                    <FaAngleRight className="icon"/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Blogs
