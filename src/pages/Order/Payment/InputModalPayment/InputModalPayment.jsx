import { faCheck, faCheckCircle, faCheckDouble, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { validate } from '../../../../constants'

import { Button, InputField, Modal, Title } from '../../../../smallComponents'
import s from './InputModalPayment.module.scss'

const InputModalPayment = ({ method }) => {

    const soTheRef = useRef()
    const dateRef = useRef()
    const codeRef = useRef()
    const nameRef = useRef()
    const addressRef = useRef()
    const maBuuChinhRef = useRef()

    const [soThe, setSoThe] = useState('')
    const [date, setDate] = useState('')
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [maBuuChinh, setMaBuuChinh] = useState('')



    const inputCard = [
        {
            placeholder: 'Số thẻ',
            ref: soTheRef,
            value: soThe,
            setValue: setSoThe,
        },
        {
            placeholder: 'Ngày hết hạn',
            ref: dateRef,
            value: date,
            setValue: setDate
        },
        {
            placeholder: 'Mã CCV',
            ref: codeRef,
            value: code,
            setValue: setCode
        },
        {
            placeholder: 'Họ và tên chủ thẻ',
            ref: nameRef,
            value: name,
            setValue: setName
        },
        {
            placeholder: 'Địa chỉ',
            ref: addressRef,
            value: address,
            setValue: setAddress
        }, {
            placeholder: 'Mã bưu chính',
            ref: maBuuChinhRef,
            value: maBuuChinh,
            setValue: setMaBuuChinh
        }

    ]
    const grInputRef = useRef()
    const btnSubmit = useRef()

    const handleSubmitMethod = () => {
        console.log('Submit ne!')
    }

    useEffect(() => {
        validate({
            groupInput: grInputRef.current,
            btnSubmit: btnSubmit.current,
            errorStyles: s.error,
            rules: [
                validate.isRequired(soTheRef.current, 'sothe'),
                validate.isRequired(dateRef.current, 'date'),
                validate.isDate(dateRef.current, 'date'),
                validate.isRequired(codeRef.current, 'code'),
                validate.isRequired(nameRef.current, 'name'),
                validate.isRequired(addressRef.current, 'address'),
                validate.isRequired(maBuuChinhRef.current, 'mabuuchinh'),
            ],
            onSubmit: handleSubmitMethod
        })
    }, [])

    const getTitle = () => {

        if (method.cate === 'Ví điện tử') {
            return 'ví'
        }
        else {
            return 'thẻ'
        }
    }

    const security = {
        title: 'Thông tin thẻ của bạn được bảo mật.',
        content: `Chúng tôi hợp tác với CyberSource để đảm bảo thông tin ${getTitle()} của bạn được an toàn và bảo mật tuyệt đối. Instacoper sẽ không được cấp quyền truy cập vào thông tin thẻ của bạn.`
    }

    return (
        <Modal>
            <Title>{`Thêm ${getTitle()}`}</Title>
            <div className={s.content}>
                <div className={s.content__security}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <div>
                        <h1>{security.title}</h1>
                        <h2>{security.content}</h2>
                    </div>
                </div>
            </div>

            <div className={s.content__input} ref = {grInputRef}>
                {
                    inputCard.map((item, index) => (
                        <div key={index} className={s.content__input_item}>
                            <InputField
                                setValue={item.setValue}
                                value={item.value}
                                ref={item.ref}
                                placeholder={item.placeholder}
                            />
                            <span />
                        </div>
                    ))
                }
            </div>
            <div>
                <Button ref={btnSubmit}/>
            </div>
        </Modal>
    )
}

export default InputModalPayment