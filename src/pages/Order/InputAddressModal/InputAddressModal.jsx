import React, { useEffect, useState } from 'react'

import InputField from '../../../smallComponents/InputField/InputField'
import Button from '../../../smallComponents/Button/Button'
import s from './InputAddressModal.module.scss'
import { localStore } from '../../../constants'
import SelectBox from '../../../smallComponents/SelectBox/SelectBox'

const InputAddressModal = ({ setOpenModal, setNoAddress }) => {

    //State for calling API
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/?depth=3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



    //State for normal components

    const [city, setCity] = useState(null)
    const [district, setDistrict] = useState('Quận/ Huyện')
    const [districtList, setDistrictList] = useState([])
    const [ward, setWard] = useState('Phường/ Xã')
    const [wardList, setWardList] = useState([])

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
            city,
            district,
            ward,
            tagID: Math.random()
        }
        localStorage.setItem(getAddress().key, JSON.stringify([...getAddress().items, address]))
        if (getAddress().items.length === 1) {
            localStorage.setItem(currentAddress.key, JSON.stringify([address]))
        }

        setNoAddress(false)
        setOpenModal(false)
    }


    useEffect(() => {
        if (city && city !== "Tỉnh/ Thành phố") {
            const newData = data.filter(item => item.name === city)
            setDistrictList(newData[0].districts)
            if (district) {
                setDistrict('Quận/ Huyện')
            }
            if (ward) {
                setWard('Phường/ Xã')
            }
        }

    }, [city])


    useEffect(() => {
        if (district && district !== "Quận/ Huyện") {
            const newData = districtList.filter(item => item.name === district)
            setWardList(newData[0].wards)

            if (ward) {
                setWard('Phường/ Xã')
            }
        }
    }, [district])
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content_header}>
                    <h1>Địa chỉ mới</h1>
                    <div/>
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
                        <SelectBox
                            defaultActive='Tỉnh/ Thành phố'
                            listShow={data.map(item => item.name)}
                            setCurrentValue={setCity}
                            idForSelect='city'
                            className={s.customBox}
                            classNameList = {s.customList}
                        />

                        <SelectBox
                            defaultActive={district}
                            listShow={districtList.map(item => item.name)}
                            setCurrentValue={setDistrict}
                            idForSelect='district'
                            isDisable={!city}
                            className={s.customBox}
                            classNameList = {s.customList}

                        />

                        <SelectBox
                            defaultActive={ward}
                            listShow={wardList.map(item => item.name)}
                            setCurrentValue={setWard}
                            idForSelect='ward'
                            isDisable={district === 'Quận/ Huyện'}
                            className={s.customBox}
                            classNameList = {s.customList}
                        />
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
                    <Button outlineBlack onClick={handleGoback}> Trở lại</Button>
                    <Button pink onClick={handleSubmitAddress} >Hoàn thành</Button>
                </div>
            </div>
        </div>
    )
}

export default InputAddressModal