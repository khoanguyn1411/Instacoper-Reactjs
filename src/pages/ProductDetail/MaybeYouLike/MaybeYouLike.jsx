import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

import styles from './MaybeYouLike.module.scss'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import { products } from '../../../constants';

const MaybeYouLike = ({ setActiveImg }) => {
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    
    const [randomProducts, setRandomProducts] = useState(() => {
        return getMultipleRandom(products.listProducts, 6)
    })



    const navigate = useNavigate()
 
    function removeAccent(str) {
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        str = str.replace(/\s/g, '-');
        str = str.toLowerCase()
        return str
    }

    const handleSwitchToDetailPage = (item) => {
        let path = `/san-pham/chi-tiet-san-pham/${removeAccent(item.name)}/`
        console.log(path)
        navigate(path);
        window.scrollTo(0, 0)
    }

    const handleSetItemToLocal = (item) => {
        localStorage.setItem('forDetailPros', JSON.stringify(item))
        handleSwitchToDetailPage(item)
        setActiveImg({
            index: 0,
            thumb: item.thumb
        })
        setRandomProducts(getMultipleRandom(products.listProducts, 6))
    }



    return (
        <div className={styles.wrapper}>
            <h1>CÓ THỂ BẠN SẼ THÍCH</h1>
            <div className={styles.wrapper__products}>
                {
                    randomProducts.map((item, index) => (
                        <div key={index}>
                            <ItemProduct 
                                saleOf
                                status
                                priceSaleOf
                                onClick={() => { handleSetItemToLocal(item) }}
                                product={item}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default MaybeYouLike