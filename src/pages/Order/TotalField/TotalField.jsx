import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { localStore, util } from '../../../constants'
import { Button, InputField, Modal, Title } from '../../../smallComponents'
import s from './TotalField.module.scss'
import { PageContext } from '../../../components/PageContext/PageContext'

const TotalField = ({ method, isDiscount }) => {

    const context = useContext(PageContext)
    const setRerenderAllPage = context.setRerender
    const handleSetBold = context.handleSetBold

    const deliveryMethod = [
        {
            name: 'Giao hàng nhanh',
            price: 40000,
            des: 'Nếu bạn có nhu cầu nhận hàng từ 1 - 2 ngày, hãy chọn phương thức giao hàng này.'
        },
        {
            name: 'Giao hàng tiết kiệm',
            price: 30000,
            des: 'Phương thức giao hàng tiết kiệm, nhận hàng từ 4 - 6 ngày khi đặt hàng.'
        }
    ]

    const items = localStore.getItemsOrder().items
    const infoPaymentAll = {
        items,
        method,
        isDiscount,
        address: localStore.getCurrentAddress().items[0],
        delivery: localStore.getCurrentDelivery().items[0] || deliveryMethod[0],
        card: localStore.getCurrentPayment().items[0]
    }

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')

    const [isSuccessOrder, setIsSuccessOrder] = useState(false)


    const handleOrder = () => {
        if (method.name === 'Thanh toán điện tử' || method.name === 'Thanh toán bằng thẻ quốc tế') {
            if (!infoPaymentAll.card || infoPaymentAll.card === 0) {
                setIsOpenModal(true)
                setAlertMessage('Vui lòng thiết lập thẻ thanh toán')
                return
            }
        }
        if (!infoPaymentAll.address) {
            setIsOpenModal(true)
            setAlertMessage('Vui lòng thiết lập địa chỉ')
            return
        }
        else {
            setIsSuccessOrder(true)
        }
    }
    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const navigate = useNavigate()

    const navigateToHome = () => {
        setRerenderAllPage(Math.random())
        let path = '/trang-chu'
        navigate(path)
        handleSetBold(
            {
                direct: 'trang-chu',
                pageAssistance: undefined
            }
        )
    }
    const handleCloseSuccessModal = () => {
        localStorage.setItem(localStore.getItemsOrder().key, JSON.stringify([]))
        localStorage.setItem(localStore.getItemsInCart().key, JSON.stringify([]))
        setIsSuccessOrder(false)

        navigateToHome()
    }

    const totalPriceProducts = items.reduce((acc, curr) => {
        return acc += curr.totalPrice
    }, 0)

    const allPrice = totalPriceProducts + infoPaymentAll.delivery.price - (isDiscount ? 50000 : 0)

    return (
        infoPaymentAll.items && infoPaymentAll.items.length > 0 &&
        <div className={s.wrapper}>
            <div className={s.wrapper__topContent}>
                <div className={s.wrapper__topContent_note}>
                    <h1>Lời nhắn: </h1>
                    <InputField placeholder='Lưu ý cho người bán' />
                </div>
                <div className={s.wrapper__topContent_total}>
                    <h5>{method.name}</h5>
                    <div className={s.totalProducts}>
                        <h3>Tổng tiền hàng: </h3>
                        <h4>{util.formatCurrency(totalPriceProducts)}</h4>
                    </div>

                    <div className={s.delivery}>
                        <h3>Tiền vận chuyển: </h3>
                        <h4>{util.formatCurrency(infoPaymentAll.delivery.price)}</h4>
                    </div>

                    {
                        isDiscount &&
                        <div className={s.discount}>
                            <h3>Giảm giá: </h3>
                            <h4>- {util.formatCurrency(50000)}</h4>
                        </div>
                    }

                    <div className={s.total}>
                        <h2>Tổng thanh toán: </h2>
                        <h1>{util.formatCurrency(allPrice)}</h1>
                    </div>
                </div>
            </div>
            <div className={s.wrapper__bottomContent}>
                <Button onClick={handleOrder} pink> Đặt hàng</Button>
            </div>
            {
                isOpenModal &&
                <Modal className={s.modal}>
                    <Title>Thông báo</Title>
                    <h2>{alertMessage} </h2>
                    <Button onClick={handleCloseModal} pink>OK</Button>
                </Modal>
            }
            {
                isSuccessOrder &&
                <Modal className={s.modal}>
                    <Title>Đặt hàng thành công</Title>
                    <h2>Cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi, chúng tôi sẽ liên hệ sớm với bạn để xác nhận đơn hàng. </h2>
                    <Button onClick={handleCloseSuccessModal} outlineBlack>Trở lại</Button>
                </Modal>
            }
        </div>
    )
}

export default TotalField