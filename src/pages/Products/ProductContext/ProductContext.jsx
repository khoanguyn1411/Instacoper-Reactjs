import React, { createContext, useState } from 'react'
import { products } from '../../../constants'

const ProductContext = createContext()
const ProductProvider = ({ children }) => {

    const productsList = products.listProducts
    const [productsShow, setProductsShow] = useState({
        list: productsList,
        sortType: ''
    })
    const [isShowFilter, setShowFilter] = useState(window.innerWidth > 950)

    const [checkedListBrand, setCheckedListBrand] = useState([])
    const [checkedListGender, setCheckedListGender] = useState([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(5000000)
    const [checkedListSize, setCheckedListSize] = useState([])

    const value = {
        productsShow, setProductsShow, isShowFilter, setShowFilter,
        checkedListBrand, setCheckedListBrand,
        checkedListGender, setCheckedListGender,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        checkedListSize, setCheckedListSize
    }



    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }