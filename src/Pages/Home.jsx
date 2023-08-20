import React from 'react'
import Banner from '../Components/Home/Banner'
import Content from '../Components/Home/Content'
import Swipper from '../Components/Home/Swipper'
import Activity from '../Components/Home/Activity'
import Reviews from '../Components/Home/Reviews'
import Partners from '../Components/Home/Partners'
import TopPicks from '../Components/Home/TopPicks'

function Home() {
  return (
    <>
    <Swipper/>
      <Content/>
      <Activity/>
      <TopPicks/>
      <Banner/>   
      <Reviews/>
      <Partners/>
    </>
  )
}

export default Home
