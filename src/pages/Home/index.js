import React from "react"
import Whoweare from "../../components/Whoweare"
import OurService from "./OurService"


import Banner from "./Banner"
import OurPortfolio from "../../components/OurPortfolio"
import TalktoExpert from "../../components/TalktoExpert"
import Industries from "./Industries"
import OurtechStack from "./OurtechStack"
import OtherPlatforms from "./OtherPlatforms"
import OurClients from "./OurClients"
import BusinessModel from "./BusinessModal"
import HireDeveloper from "./HireDevelopers"
import LetsTalk from "./LetsTalk"
import Testimonial from "./Testimonial"
import Blogs from "../../components/Blogs"
import TrendingTechnologies from "./Trendingtechnologies"

const Home = () => {
  return (
    <>
      <Banner/>
      <Whoweare/>
      <OurService/>
      <OurPortfolio/>
      <TalktoExpert/>
      <Industries/>
      <OurtechStack/>
      <OtherPlatforms/>
      <TrendingTechnologies/>
      <OurClients/>
      <BusinessModel/>
      <HireDeveloper/>
      <LetsTalk/>
      <Testimonial/>
      <Blogs/>
    </>
  )
}

export default Home
