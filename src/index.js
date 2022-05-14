import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PageProvider } from './components/PageContext/PageContext';


import './index.scss';
import App from './App';
import { Order } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PageProvider>
    <BrowserRouter>
      {/* <Routes>
        <Route path='/*' element = {<App/>}/>
        <Route path='/dat-hang' element = {<Order/>}/>
      </Routes> */}
      <App/>
    </BrowserRouter>
  </PageProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
