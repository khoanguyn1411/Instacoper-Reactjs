import React, { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { PageContext } from '../../components/PageContext/PageContext'
import { HDMH,GHVC,HDCS,HDTT, CKBH, CSBM, CSDT} from '../FAQs'
import Contact from './Contact/Contact'

const FAQs = () => {

  const [isFAQsOnly, setIsFAQsOnly] = useState(true)

  const getHref = useContext(PageContext).getWindowHref

  useEffect(() => {
    if (getHref().arrPathSplit.length >= 5) {
      setIsFAQsOnly(false)
    }
    else {
      setIsFAQsOnly(true)
    }
  }, [getHref()])


  return (
    <>
      {
        isFAQsOnly &&
        <div>FAQS</div>
      }
      <Routes>
        <Route path='/ho-tro-khach-hang/huong-dan-mua-hang' element={<HDMH />} />
        <Route path='/ho-tro-khach-hang/huong-dan-thanh-toan' element={<HDTT />} />
        <Route path='/ho-tro-khach-hang/giao-hang-&-van-chuyen' element={<GHVC />} />
        <Route path='/ho-tro-khach-hang/huong-dan-chon-size' element={<HDCS />} />

        <Route path='/chinh-sach/chinh-sach-doi-tra' element={<CSDT />} />
        <Route path='/chinh-sach/chinh-sach-bao-mat' element={<CSBM />} />
        <Route path='/chinh-sach/cam-ket-&-bao-hanh' element={<CKBH />} />

        <Route path='/lien-he' element={<Contact />} />
      </Routes>
    </>


  )
}

export default FAQs