import React, { useContext, useEffect, useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'

import { PageContext } from '../../../components/PageContext/PageContext'
import CheckboxOutside from '../../../smallComponents/CheckboxOutside'
import SelectBox from '../../../smallComponents/SelectBox/SelectBox'
import styles from './ItemIncart.module.scss'

const ItemIncart = ({ product, idForSelect, checkedProductList, setCheckedProductList }) => {

    const context = useContext(PageContext)
    const itemsInCart = context.itemsInCart
    const key = context.keyItemsInCart

    const [quantity, setQuantity] = useState(product.quantity)
    const [totalPrice, setTotalPrice] = useState(product.totalPrice)

    const [size, setSize] = useState(product.sizeChosen)

    const formatCurrency = context.formatCurrency

    const updateTotalPrice = () => {
        setTotalPrice(product.price * quantity)
    }

    const handleChangeQuantity = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1)
    }


    const handleDecreaseQuantity = () => {
        if (quantity < 2) return
        setQuantity(quantity - 1)
    }
    const updateLocalStorage = (data) => {
        let newArr = itemsInCart.map((item) => {
            if (item === product) {
                item[data.key] = data.value
            }
            return item
        })
        localStorage.setItem(key, JSON.stringify(newArr))
    }


    const updateCheckedListAfterEdit = (data) => {
        let newArr = checkedProductList.map((item) => {
            if (item === product) {
                item[data.key] = data.value
            }
            return item
        })
        setCheckedProductList(newArr)
    }

    useEffect(() => {
        updateTotalPrice()
        updateLocalStorage({ key: 'quantity', value: quantity })
        updateLocalStorage({ key: 'totalPrice', value: totalPrice })

        updateCheckedListAfterEdit({ key: 'totalPrice', value: totalPrice })
        updateCheckedListAfterEdit({ key: 'quantity', value: quantity })

    }, [quantity, totalPrice])


    const handleSetCheckedList = () => {
        setCheckedProductList(function (prev) {
            const isChecked = checkedProductList.includes(product);
            if (isChecked) {
                const newArr = checkedProductList.filter(item => item !== product)
                return newArr
            }
            else {
                return [...prev, product]
            }
        })

    }

    const updateCheckedListAfterRemove = () => {
        let newCheckedList = checkedProductList.filter((item) => (item.name !== product.name))
        setCheckedProductList(newCheckedList)
    }


    const setRerender = context.setRerender

    const handleRemoveItem = () => {
        let newArr = itemsInCart.filter(item => item !== product)
        localStorage.setItem(key, JSON.stringify(newArr))
        updateCheckedListAfterRemove()
        setRerender(Math.random())
    }


    useEffect(() => {
        updateLocalStorage({ key: 'sizeChosen', value: size })
    }, [size])

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__chk}>
                <CheckboxOutside
                    item={product.name}
                    noLable
                    onchange={handleSetCheckedList}
                    checked={checkedProductList.map((item) => item.tagID).includes(product.tagID)}
                />
            </div>

            <div className={styles.wrapper__img}>
                <img src={product.thumb} alt={product.name} />
            </div>
            <div className={styles.wrapper__name}>
                <h1>{product.name}</h1>
                <h2>7 Ngày Miễn Phí Trả Hàng</h2>
            </div>
            <div className={styles.wrapper__size}>
                <h3>Size</h3>
                <SelectBox
                    small
                    idForSelect={idForSelect}
                    defaultActive={product.sizeChosen}
                    listShow={product.sizeAvailable}
                    setCurrentValue={setSize}
                >
                </SelectBox>
            </div>

            <div className={styles.wrapper__price}>
                <h3>Đơn giá</h3>
                <h4>{formatCurrency(product.price)}</h4>
            </div>

            <div className={styles.wrapper__quantity}>
                <h3>Số lượng</h3>
                <div className={styles.wrapper__quantity_field}>
                    <span onClick={handleDecreaseQuantity}>❮</span>
                    <input type='number' value={quantity} onChange={handleChangeQuantity} ></input>
                    <span onClick={handleIncreaseQuantity}>❯</span>
                </div>
            </div>
            <div className={styles.wrapper__totalPrice}>
                <h3>Số tiền</h3>
                <h4>{formatCurrency(totalPrice)}</h4>

            </div>

            <div onClick={handleRemoveItem}
                className={styles.wrapper__delete}
            >
                <HiX />
            </div>
        </div>
    )
}

export default ItemIncart