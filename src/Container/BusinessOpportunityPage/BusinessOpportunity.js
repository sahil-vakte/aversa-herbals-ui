import React from 'react'
import BoSectionOne from '../../Components/BusinessOpportunity/BoSectionOne'
import BoSectionTwo from '../../Components/BusinessOpportunity/BoSectionTwo'
import BoSectionThree from '../../Components/BusinessOpportunity/BoSectionThree'

const BusinessOpportunity = () => {
  return (
    <div>
      <div><BoSectionOne/></div>
      <div style={{marginTop:"30px"}}><BoSectionTwo/></div>
      <div style={{marginTop:"30px"}}><BoSectionThree/></div>
    </div>
  )
}

export default BusinessOpportunity