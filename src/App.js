import { useState } from 'react';


import './App.scss';
import {Navbar, Footer} from './components'
import Content from './components/Content/Content';



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
