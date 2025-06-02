import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'

export default function App() {
  console.log('App rendered'); // <-- Это должно появиться в консоли

  return (
    <>
      <Header/>
      <Home/>
      <About/>
    </>
  )
}
 