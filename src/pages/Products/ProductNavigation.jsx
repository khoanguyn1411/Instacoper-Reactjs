import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { products, tabList } from '../../constants'
import Products from './Products'
import ProductDetail from '../ProductDetail/ProductDetail'


const ProductNavigation = () => {

    function removeAccent(str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        str = str.replace(/\s/g, '-');
        str = str.toLowerCase()
        return str
    }

    const productList = products.listProducts

    return (
        <Routes>
            <Route path='/*' element={<Products filter='Tất cả sản phẩm' />} />
            <Route path='/khuyen-mai' element={<Products cate='promotion' filter='Khuyến mãi' />} />
            <Route path='/hang-moi-ve' element={<Products cate='newPros' filter='Hàng mới về' />} />
            <Route path='/ban-chay-nhat' element={<Products cate='sales' filter='Bán chạy nhất' />} />
            {
                productList.map((item, index) => (
                    <Route key={index}
                        path={`/chi-tiet-san-pham/${removeAccent(item.name)}/`}
                        element={<ProductDetail product = {item} />}
                    />
                ))
            }
        </Routes>
    )
}

export default ProductNavigation