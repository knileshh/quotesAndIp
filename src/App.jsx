import { useState } from 'react'
import UserIPAddress from './UserIpAddress'
import './App.css'
import NasaPictureOfTheDay from './NasaPictureOfTheDay'
import QuoteCard from './QuoteCard'
import CatFactCard from './CatFactCard'
import FooterCard from './FooterCard'

function App() {

  return (
    <>
      <UserIPAddress />
      <NasaPictureOfTheDay/>
      {/* <QuoteCard/> */}
      <CatFactCard/>
      <FooterCard/>
    </>
  )
}

export default App
