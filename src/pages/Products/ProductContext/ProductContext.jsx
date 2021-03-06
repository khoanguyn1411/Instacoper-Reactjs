import React, { createContext, useContext, useState } from 'react'

import { PageContext } from '../../../components/PageContext/PageContext'
import { products } from '../../../constants'

const ProductContext = createContext()
const ProductProvider = ({ children }) => {


    const productsList = products.listProducts
    const pageContext = useContext(PageContext)


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


    const [currentItems, setCurrentItems] = useState((productsShow.list.slice(0, 5)));
    const [itemOffset, setItemOffset] = useState(0);

    const [remountComponent, setRemountComponent] = useState(0);

    const [minValueToFilter, setMinValueToFilter] = useState(0)
    const [maxValueToFilter, setMaxValueToFilter] = useState(5000000)
    

    const value = {
        productsShow, setProductsShow, isShowFilter, setShowFilter,
        checkedListBrand, setCheckedListBrand,
        checkedListGender, setCheckedListGender,
        minPrice, setMinPrice,
        maxPrice, setMaxPrice,
        checkedListSize, setCheckedListSize,
        currentItems, setCurrentItems,
        itemOffset, setItemOffset,
        remountComponent, setRemountComponent,
        minValueToFilter,setMinValueToFilter,
        maxValueToFilter, setMaxValueToFilter
    }



    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }