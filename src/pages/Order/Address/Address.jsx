import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faAdd, faRemove } from '@fortawesome/free-solid-svg-icons'

import styles from './Address.module.scss'
import Button from '../../../smallComponents/Button/Button'
import CheckBoxOutside from '../../../smallComponents/CheckboxOutside'
import InputAddressModal from '../InputAddressModal/InputAddressModal'
import { localStore } from '../../../constants'


// function AddressAdded(name, phone, houseNumber, email, ward, district, city) {
//     this.name = name
//     this.phone = phone
//     this.houseNumber = houseNumber
//     this.email = email
//     this.ward = ward
//     this.district = district
//     this.city = city
// }

const ShowAddress = ({ setEdit, setNoAddress }) => {
    const handleShowAddAddress = () => {
        setEdit(true)
    }
    const currentAddress = localStore.getCurrentAddress().items[0]

    useEffect(() => {
        if (!currentAddress || currentAddress.length === 0) {
            setNoAddress(true)
        }
        else {
            setNoAddress(false)
        }
    }, [])



    return (
        <>
            <div className={styles.wrapper__info}>
                <div className={styles.wrapper__info_contact}>
                    <h1>{currentAddress.name}</h1>
                    <h1>{currentAddress.phone}</h1>
                    <h3>{currentAddress.specificAddress}</h3>
                </div>
                <div className={styles.wrapper__info_change}>
                    <h1 onClick={handleShowAddAddress}>Thay đổi</h1>
                </div>
            </div>
        </>
    )
}

const AddAddress = ({ isOpenModal, setOpenModal, setEdit, setNoAddress }) => {
    const listAddress = localStore.getItemsAddress().items
    const [checkedAddress, setCheckedAddress] = useState(localStore.getCurrentAddress().items[0])
    const [reRender, setRerender] = useState(Math.random())
    const handleSetCheckedAddress = (item) => {
        setCheckedAddress(item)
        localStorage.setItem(localStore.getCurrentAddress().key, JSON.stringify([item]))
    }
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleGoBack = () => {
        setEdit(false)
    }

    useEffect(() => {
        if(listAddress.length === 0){
            setNoAddress(true)
            setEdit(false)
            localStorage.setItem(localStore.getCurrentAddress().key, JSON.stringify([]))
        }
    }, [listAddress])

    const handleRemoveAddress = (address) => {
        const listAddress = localStore.getItemsAddress().items
        if (checkedAddress.tagID === address.tagID) {
            const firstItem = localStore.getItemsAddress().items[0]
            setCheckedAddress(firstItem)
            localStorage.setItem(localStore.getCurrentAddress().key, JSON.stringify([firstItem]))
        }

        const newList = listAddress.filter(item => item.tagID !== address.tagID)
        localStorage.setItem(localStore.getItemsAddress().key, JSON.stringify(newList))
        setRerender(Math.random)
    }
    return (
        <div className={styles.wrapper__changeAddress}>
            <div className={styles.wrapper__changeAddress_chk}>
                {
                    listAddress.map((item, index) => (
                        <div key={index} className={styles.item_wrap}>
                            <div>
                                <CheckBoxOutside
                                    item={item.tagID}
                                    noLable
                                    checked={item.tagID === checkedAddress.tagID}
                                    onchange={() => handleSetCheckedAddress(item)}
                                />
                                <div>
                                    <h1>{`${item.name} (${item.phone})`}</h1>
                                    <h2>{`${item.specificAddress}`}</h2>
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={() => handleRemoveAddress(item)} icon={faRemove} />
                        </div>

                    ))
                }

            </div>

            <div className={styles.wrapper__changeAddress_buttons}>
                <div className={styles.leftSide}>
                    <Button pink onClick={handleGoBack}>Hoàn thành</Button>
                </div>
                <div className={styles.rightSide}>
                    <Button icon={<FontAwesomeIcon icon={faAdd} />} outlineBlack onClick={handleOpenModal}>Thêm địa chỉ mới</Button>
                    {/* <Button icon={<FontAwesomeIcon icon={faRemove} />} outlineBlack>Xóa địa chỉ</Button> */}
                    <FontAwesomeIcon onClick={handleOpenModal} icon={faAdd} />
                    {/* <FontAwesomeIcon icon={faRemove} /> */}
                </div>

            </div>

            {
                isOpenModal && <InputAddressModal setOpenModal={setOpenModal}
                />}

        </div>
    )
}

const NoAddress = ({ setOpenModal }) => {
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    return (
        <div className={styles.wrapper__noAddress}>
            <h1>Bạn chưa thiết lập địa chỉ giao hàng</h1>
            <Button onClick={handleOpenModal} outlineBlack>Thiết lập địa chỉ ngay</Button>
        </div>
    )
}

const Address = () => {
    const [isEdit, setEdit] = useState(false)
    const currentAddress = localStore.getCurrentAddress().items

    const [isNoAddress, setNoAddress] = useState(() => {
        if (currentAddress.length === 0) {
            return true
        }
        else {
            return false
        }
    })

    const [isOpenModal, setOpenModal] = useState(false)
    const props = {
        isEdit, setEdit, isNoAddress, setNoAddress, isOpenModal, setOpenModal
    }
    const conditionShowAddress = () => {
        if (isEdit === false && isNoAddress === false) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__title}>
                <FontAwesomeIcon icon={faLocationDot} />
                <h1>Địa chỉ nhận hàng</h1>
            </div>
            {
                conditionShowAddress() && <ShowAddress {...props} />
            }
            {
                isEdit && <AddAddress {...props} />
            }
            {
                isNoAddress && <NoAddress {...props} />
            }

            {
                isOpenModal && <InputAddressModal {...props}
                />}
        </div>
    )
}

export default Address