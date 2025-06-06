import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Features from './components/features/Features'
import Menu from './components/menu/Menu'
import Choose from './components/choose/Choose'
import Stats from './components/stats/Stats'
import Gallery from './components/gallery/Gallery'
import Offers from './components/offers/Offers'
import Team from './components/team/Team'
import Reservation from './components/reservation/Reservation'
import Testimonials from './components/testimonials/Testimonials'

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Choose/>
      <Stats/>
      <Gallery/>
      <Offers/>
      <Team/>
      <Reservation/>
      <Testimonials/>
    </>
  )
}
 