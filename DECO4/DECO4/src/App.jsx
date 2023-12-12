import 'react';
import 'react-dom';
import './App.css';

import Menu from './Components/Menu'
import Hero from './Components/Hero'
import Companies from './Components/Companies';
import Features from './Components/Features';
import Customer from './Components/Customer'
import Footer from './Components/Footer'

function App(){
  return(
    <>
    <Menu/>
    <Hero/>
    <Companies/>
    <Features/>
    <Customer/>
    <Footer/>
    </>
  )
}

export default App;