import React from 'react'
import SectionOne from '../../Components/HomePage/SectionOne'
import TopProducts from '../../Components/HomePage/TopProducts'
import BusinessOpportunityInfo from '../../Components/HomePage/BusinessOpportunityInfo'
import BlogsCarousal from '../../Components/HomePage/BlogsCarousal'

const WebsiteHomepage = () => {
  return (
    <div>
      <div><SectionOne/></div>
      <div style={{marginTop:"30px"}}><TopProducts/></div>
      <div style={{marginTop:"30px"}}><BusinessOpportunityInfo/></div>
    </div>
  )
}

export default WebsiteHomepage