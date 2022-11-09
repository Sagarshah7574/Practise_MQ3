import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { testimonialData } from "./testimonialdata"
import next from "../../../assets/images/next.svg"
import prev from "../../../assets/images/prev.svg"

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <img src={prev} alt="" />
    </div>
  )
}
function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <img src={next} alt="" />
    </div>
  )
}

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <section>
      <div className="testimonial-section">
        <Container>
          <Row>
            <Col>
              <div className="title-text testimonial">
                <h3>Testimonial</h3>
                <p>Testimonial</p>
              </div>
              <Slider className="test-slider" {...settings}>
                {testimonialData.map((testimonial, index) => {
                  return (
                    <div className="slider" key={`test-slider${index}`}>
                      <div className="testimonial-slider">
                        <div className="client-image">
                          <img src={testimonial.imgurl1} alt="" />
                        </div>
                        <div className="client-content">
                          <img src={testimonial.imgurl2} alt="" />
                          <p>{testimonial.description}</p>
                          <h4>{testimonial.name}</h4>
                          <h5>{testimonial.post}</h5>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Testimonial
