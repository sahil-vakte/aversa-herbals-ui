import React from 'react'
import SectionOne from '../../Components/HomePage/SectionOne'
import TopProducts from '../../Components/HomePage/TopProducts'
import BusinessOpportunityInfo from '../../Components/HomePage/BusinessOpportunityInfo'
import SectionTwo from '../../Components/HomePage/SectionTwo'
import SectionThree from '../../Components/HomePage/SectionThree'
import WebNavbarAdd from '../../Components/WebsiteNavbar/WebNavbarAdd'
import MainImage from "../../Assets/professional perspective.svg"

const WebsiteHomepage = () => {
  return (
    <div>
      <div><WebNavbarAdd/></div>
      <div><SectionOne/></div>
      <div style={{marginTop:"80px"}}><SectionTwo/></div>
      <div style={{marginTop:"80px"}}><TopProducts/></div>
      <div style={{marginTop:"80px"}}><SectionThree/></div>
      <div style={{marginTop:"80px"}}>
        <img src={MainImage}/>
      </div>
      <div style={{marginTop:"80px"}}><BusinessOpportunityInfo/></div>
    </div>
  )
}

export default WebsiteHomepage