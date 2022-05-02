import { useState } from 'react';


import './App.scss';
import {Navbar, Footer} from './components'
import Content from './components/Content/Content';
import { PageProvider } from './components/PageContext/PageContext';



function App() {
  return (
    <PageProvider>
      <Navbar/>
      <Content/>
      <Footer/>
    </PageProvider>
     
  )
}

export default App;
