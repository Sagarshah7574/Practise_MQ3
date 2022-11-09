import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import flutterouter from "../../../assets/images/flutterouter.png"
import firebaseouter from "../../../assets/images/firebase-outer-img.png" 
import reactouter from "../../../assets/images/react-outer-img.png"
import awsouter from "../../../assets/images/aws-outer-img.png"
import golang_icon from "../../../assets/images/golang-icon.png"
import Flutter from "../../../assets/images/Flutter.png"
import firebase from "../../../assets/images/firebase.png"
import react from "../../../assets/images/react.png"
import aws from "../../../assets/images/aws-icon.png"
import bluecircle from "../../../assets/images/blue-circle.png"
import bluesmallcircle from "../../../assets/images/blue-small-circle.png"
import yellowcircle from "../../../assets/images/yellow-circle.png"
import yellowsmallcircle from "../../../assets/images/yellow-small-circle.png"
 
const TrendingTechnologies = () => {
  return (
    <section>
      <div className="trending-technologies">
        <Container>
          <Row>
            <Col>
              <div className="title-text trending-tech area">
                <h3>Trending Technologies</h3>
                <h4>Top Industries We Serve</h4>
                <p>
                  With the power of these tools we help you embed complete tech
                  excellence in your web.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="tred-technology">
             <div className="circle">
                <img src={flutterouter} alt="flutterouter" className="fluter-outer-img"/>
                <img src={golang_icon} alt="golang-icon" className="golang-icon" />
                <img src={bluecircle} alt="blue-circle" className="blue-circle" />
                <h4>GoLang</h4>
             </div>
             <div className="circle1">
             <img src={flutterouter} alt="flutter-outer-img" className="fluter-outer-img"/> 
             <img src={Flutter} alt="flutter" className="flutter-icon"/>
             <img src={bluecircle} alt="blue-circle" className="blue-circle" />
              <h4>Flutter</h4>
             </div>
             <div className="circle2">
              <img src={firebaseouter} alt="firebase-outer-img" className="firebase-outer-img"/> 
              <img src={react} alt="react" className="react-icon"/>
              <img src={bluesmallcircle} alt="blue-small -circle" className="blue-small-circle"/> 
              <h4>Firebase</h4> 
             </div>
             <div className="circle3">
              <img src={reactouter} alt="react-outer-img" className="react-outer-img"/> 
              <img src={firebase} alt="firebase" className="firebase-icon"/>
              <img src={yellowcircle} alt="yellow-circle" className="yellow-circle"/>
              <h4>Firebase</h4>
             </div>
             <div className="circle4">
             <img src={reactouter} alt="react-outer-img" className="react-outer-img"/>  
             <img src={aws} alt="aws" className="aws-icon"/>
             <img src={yellowcircle} alt="yellow-circle" className="yellow-circle"/>
             <h4>React</h4>
            </div>
              <div className="circle5">
                <img src={awsouter} alt="aws-outer-img" className="aws-outer-img"/>
                <img src={aws} alt="aws" className="aws-icon"/>
                <img src={yellowsmallcircle} alt="yellow-small-circle" className="yellow-small-circle"/>
                <h4>AWS</h4>
              </div>
             
            </div> 
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default TrendingTechnologies
