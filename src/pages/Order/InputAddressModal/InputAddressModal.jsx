import React, { useEffect, useRef, useState } from 'react'

import InputField from '../../../smallComponents/InputField/InputField'
import Button from '../../../smallComponents/Button/Button'
import s from './InputAddressModal.module.scss'
import { localStore, validate } from '../../../constants'
import SelectBox from '../../../smallComponents/SelectBox/SelectBox'

const InputAddressModal = ({ setOpenModal, setNoAddress, setRerender }) => {

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
    const defaultValue = {
        city: 'Tỉnh/ Thành phố',
        district: 'Quận/ Huyện',
        ward: 'Phường/ Xã'
    }

    const [city, setCity] = useState(defaultValue.city)
    const [district, setDistrict] = useState(defaultValue.district)
    const [districtList, setDistrictList] = useState([])
    const [ward, setWard] = useState(defaultValue.ward)
    const [wardList, setWardList] = useState([])

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [specificAddress, setSpecificAddress] = useState('')
    const handleGoback = () => {
        setOpenModal(false)
    }
    const listAddress = localStore.getItemsAddress()
    const currentAddress = localStore.getCurrentAddress()


    const inputFieldRef = useRef()
    const btnSubmit = useRef()

    const nameRef = useRef()
    const phoneRef = useRef()
    const specificAddressRef = useRef()

    const cityRef = useRef()
    const districtRef = useRef()
    const wardRef = useRef()


    const address = {
        name,
        phone,
        specificAddress,
        city,
        district,
        ward,
        tagID: Math.random()
    }

    useEffect(() => {
        validate({
            groupInput: inputFieldRef.current,
            btnSubmit: btnSubmit.current,
            errorStyles: s.error,
            rules: [
                validate.isRequired(nameRef.current, 'name'),
                validate.isRequired(phoneRef.current, 'phone'),
                validate.isRequired(specificAddressRef.current, 'specificAddress'),

                validate.isSelectBoxRequired(cityRef.current, 'city', defaultValue.city, 'selectBox'),
                validate.isSelectBoxRequired(districtRef.current, 'district', defaultValue.district, 'selectBox'),
                validate.isSelectBoxRequired(wardRef.current, 'ward', defaultValue.ward, 'selectBox'),
            ],
            onSubmit: handleSubmitAddress,
        })

    }, [address])



    const handleSubmitAddress = () => {
        localStorage.setItem(listAddress.key, JSON.stringify([...listAddress.items, address]))
        if (listAddress.items.length === 0) {
            localStorage.setItem(currentAddress.key, JSON.stringify([address]))
        }
        setNoAddress(false)
        setOpenModal(false)
        setRerender(Math.random())
    }


    useEffect(() => {
        if (city && city !== defaultValue.city) {
            const newData = data.filter(item => item.name === city)
            setDistrictList(newData[0].districts)
            if (district) {
                setDistrict(defaultValue.district)
            }
            if (ward) {
                setWard(defaultValue.ward)
            }
        }

    }, [city])

    useEffect(() => {
        if (district && district !== defaultValue.district) {
            const newData = districtList.filter(item => item.name === district)
            setWardList(newData[0].wards)

            if (ward) {
                setWard(defaultValue.ward)
            }
        }
    }, [district])

    console.log(district)

    return (
        <div className={s.wrapper} ref={inputFieldRef}>
            <div className={s.wrapper__content}>
                <div className={s.wrapper__content_header}>
                    <h1>Địa chỉ mới</h1>
                    <div />
                </div>
                <div className={s.wrapper__content_field}>
                    <div className={s.nameAndPhone}>
                        <div className={s.input_group}>
                            <InputField
                                setValue={setName}
                                value={name}
                                placeholder='Họ và tên'
                                ref={nameRef}
                                className={''}
                            />
                            <span className={s.errorMessage}></span>
                        </div>
                        <div className={s.input_group} >
                            <InputField
                                setValue={setPhone}
                                value={phone}
                                ref={phoneRef}
                                type='phone'
                                placeholder='Số điện thoại'
                            />
                            <span className={s.errorMessage}></span>
                        </div>


                    </div>

                    <div className={s.citys}>
                        {/* Làm cái chọn tỉnh thành sau */}
                        <div>
                            <SelectBox
                                defaultActive={defaultValue.city}
                                listShow={data.map(item => item.name)}
                                setCurrentValue={setCity}
                                className={s.customBox}
                                ref={cityRef}
                                classNameList={s.customList}
                                value = {city}

                            />
                            <span className={s.errorMessage}></span>
                        </div>
                        <div>
                            <SelectBox
                                defaultActive={defaultValue.district}
                                listShow={districtList.map(item => item.name)}
                                setCurrentValue={setDistrict}
                                isDisable={city === defaultValue.city}
                                className={s.customBox}
                                classNameList={s.customList}
                                ref={districtRef}
                                value = {district}
                            />
                            <span className={s.errorMessage}></span>
                        </div>

                        <div>
                            <SelectBox
                                defaultActive={defaultValue.ward}
                                listShow={wardList.map(item => item.name)}
                                setCurrentValue={setWard}
                                isDisable={district === defaultValue.district}
                                className={s.customBox}
                                classNameList={s.customList}
                                ref={wardRef}
                                value = {ward}

                            />
                            <span className={s.errorMessage}></span>
                        </div>
                    </div>

                    <div className={s.specificAddress}>
                        <div className={s.input_group}>
                            <InputField
                                setValue={setSpecificAddress}
                                value={specificAddress}
                                ref={specificAddressRef}
                                placeholder='Địa chỉ cụ thể'
                            />
                            <span className={s.errorMessage}></span>
                        </div>

                    </div>
                </div>

                <div className={s.wrapper__content_buttons}>
                    <Button outlineBlack onClick={handleGoback}> Trở lại</Button>
                    <Button ref={btnSubmit} pink >Hoàn thành</Button>
                </div>
            </div>
        </div>
    )
}

export default InputAddressModal