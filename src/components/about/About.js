import React from 'react'
import AboutCompany from './AboutCompany'
import AboutAuction from './AboutAuction'
import AboutTeam from './AboutTeam'


export default function About() {
  return (
    <div className='about_container'>
      <AboutCompany/>
      <AboutAuction/>
      <AboutTeam/>
    </div>
  )
}
