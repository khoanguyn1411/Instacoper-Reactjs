import React, { useEffect, useState } from 'react'

import styles from './MaybeYouLike.module.scss'
import ItemProduct from '../../../smallComponents/ItemProduct/ItemProduct'
import { products, util } from '../../../constants';

const MaybeYouLike = ({ product }) => {
  

    const [randomProducts, setRandomProducts] = useState(() => {
        return util.getMultipleRandom(products.listProducts, 6)
    })


    useEffect(() => {
        setRandomProducts(util.getMultipleRandom(products.listProducts, 6))
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