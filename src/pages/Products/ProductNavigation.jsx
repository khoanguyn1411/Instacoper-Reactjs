import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { products, tabList } from '../../constants'
import Products from './Products'


const ProductNavigation = () => {

    const productsList = products.listProducts


    function removeSpace(str) {
        str = str.replace(/\s+/g, '-')
        str = str.toLowerCase()
        return str
    }

    return (
        <Routes>
            <Route path='/*' element={<Products filter='' />} />
            <Route path='/khuyen-mai' element={<Products cate='promotion' filter='promotion' />} />
            <Route path='/hang-moi-ve' element={<Products cate='newPros' filter='newproduct' />} />
            <Route path='/ban-chay-nhat' element={<Products cate='sales' filter='topsale' />} />

        </Routes>
    )
}

export default ProductNavigation