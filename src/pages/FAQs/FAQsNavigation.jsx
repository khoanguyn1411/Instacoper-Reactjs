import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HDMH, GHVC, HDCS, HDTT, CKBH, CSBM, CSDT } from '../FAQs'
import Contact from './Contact/Contact'
import FAQs from './FAQs'

const FAQsNavigation = () => {
  return (
    <Routes>
        <Route path='/*' element={<FAQs />} />
        <Route path='/ho-tro-khach-hang/huong-dan-mua-hang' element={<HDMH />} />
        <Route path='/ho-tro-khach-hang/huong-dan-thanh-toan' element={<HDTT />} />
        <Route path='/ho-tro-khach-hang/giao-hang-&-van-chuyen' element={<GHVC />} />
        <Route path='/ho-tro-khach-hang/huong-dan-chon-size' element={<HDCS />} />

        <Route path='/chinh-sach/chinh-sach-doi-tra' element={<CSDT />} />
        <Route path='/chinh-sach/chinh-sach-bao-mat' element={<CSBM />} />
        <Route path='/chinh-sach/cam-ket-&-bao-hanh' element={<CKBH />} />

        <Route path='/lien-he' element={<Contact />} />
      </Routes>
  )
}

export default FAQsNavigation