import React, { useState } from 'react'

import InputField from '../../../smallComponents/InputField/InputField'
import Button from '../../../smallComponents/Button/Button'
import s from './InputAddressModal.module.scss'
import {localStore} from '../../../constants'

const InputAddressModal = ({isOutside, setOpenModal, setNoAddress}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [specificAddress, setSpecificAddress] = useState('')
    const handleGoback = () => {
        setOpenModal(false)
    }

    const getAddress = localStore.getItemsAddress
    const currentAddress = localStore.getCurrentAddress()
    const handleSubmitAddress = () => {
        const address = {
            name,
            phone,
            specificAddress, 
            // tagID : `${name}?${phone}?${specificAddress}`
            tagID: Math.random()
        }
        localStorage.setItem(getAddress().key, JSON.stringify([...getAddress().items, address]))
        localStorage.setItem(currentAddress.key, JSON.stringify([address]))
        
        setNoAddress(false)
        setOpenModal(false)
    }       

        return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content_header}>
                    <h1>Địa chỉ mới</h1>
                </div>
                <div className={s.wrapper__content_field}>
                    <div className={s.nameAndPhone}>
                        <InputField
                            setValue={setName}
                            value={name}
                            placeholder='Họ và tên'
                            required
                        />
                        <InputField
                            setValue={setPhone}
                            value={phone}
                            type='phone'
                            placeholder='Số điện thoại'
                            required
                        />
                    </div>

                    <div className={s.citys}>
                        {/* Làm cái chọn tỉnh thành sau */}
                    </div>

                    <div className={s.specificAddress}>
                        <InputField
                            setValue={setSpecificAddress}
                            value={specificAddress}
                            placeholder='Địa chỉ cụ thể'
                            required
                        />
                    </div>
                </div>

                <div className={s.wrapper__content_buttons}>
                    <Button outlineBlack onClick={handleSubmitAddress} >Hoàn thành</Button>
                    <Button pink onClick={handleGoback}> Trở lại</Button>
                </div>
            </div>
        </div>
    )
}

export default InputAddressModal