import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faLocationDot } from '@fortawesome/free-solid-svg-icons'

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

const AddAddress = ({ isOpenModal, setOpenModal, setEdit }) => {
    const listAddress = localStore.getItemsAddress().items
    const [checkedAddress, setCheckedAddress] = useState(localStore.getCurrentAddress().items[0])

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
    return (
        <div className={styles.wrapper__changeAddress}>
            <div className={styles.wrapper__changeAddress_chk}>
                {
                    listAddress.map((item, index) => (
                        <div key={index} className={styles.item_wrap}>
                            <CheckBoxOutside
                                item={item.tagID}
                                noLable
                                checked={item.tagID === checkedAddress.tagID}
                                onchange={() => handleSetCheckedAddress(item)}
                            />
                            <h1>{`${item.name} (${item.phone})`} <span>{item.specificAddress}</span></h1>
                        </div>

                    ))
                }

            </div>

            <div className={styles.wrapper__changeAddress_buttons}>
                <div className={styles.leftSide}>
                    <Button pink onClick={handleGoBack}>Hoàn thành</Button>
                </div>
                <div className={styles.rightSide}>
                    <Button outlineBlack onClick={handleOpenModal}>Thêm địa chỉ mới</Button>
                    <Button outlineBlack>Thiết lập địa chỉ</Button>
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
    console.log('re-render')
    const [isEdit, setEdit] = useState(false)
    const currentAddress = localStore.getCurrentAddress().items
    
    const [isNoAddress, setNoAddress] = useState(() => {
        console.log(currentAddress)
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