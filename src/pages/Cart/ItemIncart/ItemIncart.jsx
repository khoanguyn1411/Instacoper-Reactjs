import React, { useContext, useEffect, useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { PageContext } from '../../../components/PageContext/PageContext'
import CheckboxOutside from '../../../smallComponents/CheckboxOutside'
import SelectBox from '../../../smallComponents/SelectBox/SelectBox'
import styles from './ItemIncart.module.scss'

const ItemIncart = ({ product, checkedProductList, setCheckedProductList }) => {

    const context = useContext(PageContext)
    
    const itemsInCart = context.itemsInCart
    const key = context.keyItemsInCart
    const formatCurrency = context.formatCurrency
    const setRerender = context.setRerender
    

    const [quantity, setQuantity] = useState(product.quantity)
    const [totalPrice, setTotalPrice] = useState(product.totalPrice)
    const [size, setSize] = useState(product.sizeChosen)

   

    const updateTotalPrice = () => {
        setTotalPrice(product.price * quantity)
    }

    const handleChangeQuantity = (e) => {
        if (e.target.value) {
            setQuantity(parseInt(e.target.value))
        }
        else {
            setQuantity(e.target.value)
        }

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
            if (item.tagID === product.tagID) {
                item[data.key] = data.value
            }
            return item
        })
        setCheckedProductList(newArr)
    }

    useEffect(() => {
        updateTotalPrice()
        updateLocalStorage({ key: 'quantity', value: quantity })

        updateCheckedListAfterEdit({ key: 'quantity', value: quantity })

    }, [quantity])

    useEffect(() => {
        updateLocalStorage({ key: 'totalPrice', value: totalPrice })
        updateCheckedListAfterEdit({ key: 'totalPrice', value: totalPrice })

    }, [totalPrice])

    useEffect(() => {
        updateLocalStorage({ key: 'sizeChosen', value: size })
        updateCheckedListAfterEdit({ key: 'sizeChosen', value: size })
    }, [size])


    const handleSetCheckedList = () => {
        setCheckedProductList(function (prev) {
            const isChecked = checkedProductList.map((item) => item.tagID).includes(product.tagID);
            if (isChecked) {
                const newArr = checkedProductList.filter(item => item.tagID !== product.tagID)
                return newArr
            }
            else {
                return [...prev, product]
            }
        })

    }

    const updateCheckedListAfterRemove = () => {
        let newCheckedList = checkedProductList.filter((item) => (item.tagID !== product.tagID))
        setCheckedProductList(newCheckedList)

    }



    const handleRemoveItem = () => {
        let newArr = itemsInCart.filter(item => item !== product)
        localStorage.setItem(key, JSON.stringify(newArr))
        updateCheckedListAfterRemove()
        setRerender(Math.random())
    }

    const handleInput = (e) => {
        if (!e.target.value) {
            setQuantity(1)
        }
    }

    const SelectBoxSize = (prop) => {
        return (
            <SelectBox
                defaultActive={product.sizeChosen}
                listShow={product.sizeAvailable}
                setCurrentValue={setSize}
                className={prop.className}
                classNameList = {prop.classNameList}
                // Cho nay moi sua
                value = {size}
            >
            </SelectBox>
        )
    }

    const ItemPCDisplay = () => {
        return (
            <div className={styles.wrapper}>
                <div className={styles.wrapper__chk}>
                    <CheckBox />
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
                    <SelectBoxSize className={styles.chkBox} classNameList = {styles.list} />
                </div>

                <div className={styles.wrapper__price}>
                    <h3>Đơn giá</h3>
                    <h4>{formatCurrency(product.price)}</h4>
                </div>

                <div className={styles.wrapper__quantity}>
                    <h3>Số lượng</h3>
                    <div className={styles.wrapper__quantity_field}>
                        <InputField />
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

    const CheckBox = () => {
        return (
            <CheckboxOutside
                item={product.name}
                noLable
                onchange={handleSetCheckedList}
                checked={checkedProductList.map((item) => item.tagID).includes(product.tagID)}
            />
        )
    }

    const InputField = () => {
        return (
            <>
                <span onClick={handleDecreaseQuantity}>❮</span>
                <input type='number'
                    value={quantity}
                    onChange={handleChangeQuantity}
                    onBlur={handleInput} />
                <span onClick={handleIncreaseQuantity}>❯</span>    </>
        )
    }

    const ItemMobileDisplay = () => {
        return (
            <div className={styles.wrapperMobile}>
                <div className={styles.wrapperMobile__topContent}>
                    <div className={styles.wrapperMobile__topContent_leftSide}>
                        <CheckBox />
                        <div>
                            <img src={product.thumb} />
                        </div>
                    </div>
                    <div className={styles.wrapperMobile__topContent_rightSide}>
                        <h1>{product.name}</h1>
                        <h2>{formatCurrency(product.price)}</h2>
                        <div>

                        </div>
                        <div className={styles.sizeAndQuantity}>
                            <div className={styles.sizeAndQuantity_size}>
                                <SelectBoxSize className={styles.chkBox}  classNameList = {styles.list}/>
                            </div>
                            <div className={styles.sizeAndQuantity_input}>
                                <InputField />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.wrapperMobile__bottomContent}>
                    <div className={styles.wrapperMobile__bottomContent_deleteProduct}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                        <h1>Xóa sản phẩm</h1>
                    </div>
                    <div className={styles.wrapperMobile__bottomContent_totalPrice}>
                        <h1>{formatCurrency(totalPrice)}</h1>
                    </div>
                </div>
            </div>
        )
    }

    const renderUI = () => {
        return (
            <>
                <ItemPCDisplay />
                <ItemMobileDisplay />
            </>
        )
        // if (window.innerWidth > 900) {
        //     return <ItemPCDisplay />
        // }
        // else {
        //     return <ItemMobileDisplay />
        // }
    }
    return (
        <>
            {
                renderUI()
            }
        </>
    )
}

export default ItemIncart