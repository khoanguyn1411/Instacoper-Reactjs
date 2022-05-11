import React, { useEffect, useState } from 'react'

import styles from './MaybeYouLike.module.scss'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import { products } from '../../../constants';

const MaybeYouLike = ({ product }) => {
    function getMultipleRandom(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const [randomProducts, setRandomProducts] = useState(() => {
        return getMultipleRandom(products.listProducts, 6)
    })


    useEffect(() => {
        setRandomProducts(getMultipleRandom(products.listProducts, 6))
    }, [product])



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