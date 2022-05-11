import React, { useState } from 'react'

import styles from './ItemIncart.module.scss'

const ItemIncart = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity)
    const handleChangeQuantity = () => {

    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__img}>
                <img src={product.thumb} />
            </div>
            <div className={styles.wrapper__content}>
                <h1>{product.name}</h1>
                <h3>{product.isMaleShoes ? 'Giày nam' : 'Giày nữ'}</h3>
                <div className={styles.selector}>
                    <div className={styles.selector__size}>
                        <h2>Kích thước: </h2>
                        <select>
                            {product.sizeAvailable.map((item, index) => (
                                <option key={index}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.selector__quantity}>
                        <h2>Số lượng: </h2>
                        <div>
                            <span>❮</span>
                            <input value={quantity} onChange={handleChangeQuantity} ></input>
                            <span>❯</span>
                        </div>
                    </div>
                </div>

                <div className={styles.selectorQuantity}>
                    <h2>Đơn giá:</h2>
                    <div>
                        <h2> {product.price}</h2>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper__price}>
                <h1>{product.totalPrice}</h1>
            </div>
        </div>
    )
}

export default ItemIncart