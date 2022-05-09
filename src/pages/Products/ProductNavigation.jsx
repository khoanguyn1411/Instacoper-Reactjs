import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { products, tabList } from '../../constants'
import Products from './Products'


const ProductNavigation = () => {


    function removeSpace(str) {
        str = str.replace(/\s+/g, '-')
        str = str.toLowerCase()
        return str
    }

    return (
        <Routes>
            <Route path='/*' element={<Products filter='Tất cả sản phẩm' />} />
            <Route path='/khuyen-mai' element={<Products cate='promotion' filter='Khuyến mãi' />} />
            <Route path='/hang-moi-ve' element={<Products cate='newPros' filter='Hàng mới về' />} />
            <Route path='/ban-chay-nhat' element={<Products cate='sales' filter='Bán chạy nhất' />} />

        </Routes>
    )
}

export default ProductNavigation