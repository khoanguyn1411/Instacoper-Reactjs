import { useState } from 'react';


import './App.scss';
import {Navbar, Footer} from './components'
import Content from './components/Content/Content';
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'



function App() {
  return (
    <>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
     
  )
}

export default App;
