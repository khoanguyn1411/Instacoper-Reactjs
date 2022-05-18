import { faCheck, faCheckCircle, faCheckDouble, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { localStore, validate } from '../../../../constants'

import { Button, InputField, Modal, Title } from '../../../../smallComponents'
import s from './InputModalPayment.module.scss'

const InputModalPayment = ({ method, setIsOpenModal, setPaymentCard }) => {

    const soTheRef = useRef()
    const dateRef = useRef()
    const codeRef = useRef()
    const nameRef = useRef()
    const addressRef = useRef()
    const maBuuChinhRef = useRef()

    const grInputRef = useRef()
    const btnSubmit = useRef()

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




    const handleCloseModal = () => {
        setIsOpenModal(false)
    }


    const security = {
        title: 'Thông tin thẻ của bạn được bảo mật.',
        content: `Chúng tôi hợp tác với CyberSource để đảm bảo thông tin thẻ của bạn được an toàn và bảo mật tuyệt đối. Instacoper sẽ không được cấp quyền truy cập vào thông tin thẻ của bạn.`
    }
    const getInfo = () => {
        if (method.cate === 'Ví điện tử') {
            return {
                title: 'ví',
                component: <AddWallet />
            }
        }
        else {
            return {
                title: 'thẻ',
                component: (
                    <div className={s.content}>
                        <div className={s.content__security}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                            <div>
                                <h1>{security.title}</h1>
                                <h2>{security.content}</h2>
                            </div>
                        </div>
                        <div className={s.content__cate}>
                            <h1>Loại thẻ: </h1>
                            <div className={s.img}>
                                <img alt={method.name} src={method.icon} />
                            </div>
                            <h1>{method.name}</h1>
                        </div>
                        <div className={s.content__input} ref={grInputRef}>
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
                    </div>
                )
            }
        }
    }

    useEffect(() => {
        if (getInfo().title === 'thẻ') {
            validate({
                groupInput: grInputRef.current,
                btnSubmit: btnSubmit.current,
                errorStyles: s.error,
                rules: [
                    validate.isRequired(soTheRef.current, 'sothe'),
                    validate.isRequired(dateRef.current, 'date'),
                    validate.isRequired(codeRef.current, 'code'),
                    validate.isRequired(nameRef.current, 'name'),
                    validate.isRequired(addressRef.current, 'address'),
                    validate.isRequired(maBuuChinhRef.current, 'mabuuchinh'),
                ],
                onSubmit: handleSubmitMethod
            })
        }
    }, [])


    // Phải để ở ngoài, để ở trong hàm handleSubmidMethod thì sẽ lỗi 
    const listMethods = localStore.getPaymentCard().items
    const currentPayment = localStore.getCurrentPayment().items[0]
    const handleSubmitMethod = () => {
        const infoCard = {
            card: method.name,
            cate: method.cate,
            soThe: soTheRef.current.value,
            date: dateRef.current.value,
            code: codeRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value,
            maBuuChinh: maBuuChinhRef.current.value,
            id: Math.random()
        }
        if (!currentPayment || currentPayment.length === 0) {
            localStorage.setItem(localStore.getCurrentPayment().key, JSON.stringify([infoCard]))
        }
        localStorage.setItem(localStore.getPaymentCard().key, JSON.stringify([...listMethods, infoCard]))
        setIsOpenModal(false)
        setPaymentCard(infoCard)
    }



    const AddWallet = () => {
        return (
            <h1 className={s.addWallet}>Ví <span>{method.name}</span> của bạn chưa được kích hoạt hoặc chưa liên kết với tài khoản ngân hàng.</h1>
        )
    }





    return (
        <Modal className={s.wrapperAll}>
            <div>
                <Title>{`Thêm ${getInfo().title}`}</Title>
                {getInfo().component}
            </div>
            <div className={s.buttons}>
                <Button outlineBlack onClick={handleCloseModal}>Trở lại</Button>
                {
                    getInfo().title === 'thẻ' &&
                    <Button ref={btnSubmit} pink>Hoàn thành</Button>
                }
            </div>
        </Modal>
    )
}

export default InputModalPayment