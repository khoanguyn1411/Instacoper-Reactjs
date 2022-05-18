import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

import s from './Delivery.module.scss'
import { localStore, util } from '../../../constants'
import { Button, CheckboxOutside, Modal, Title } from '../../../smallComponents'

const Delivery = ({setRerenderOut}) => {

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

    const [isOpenModal, setIsOpenModal] = useState(false)
    const handleOpenModal = () => {
        setIsOpenModal(true)
    }
    const itemDelevery = localStore.getCurrentDelivery().items.length === 0 ?
        deliveryMethod[0] : localStore.getCurrentDelivery().items[0]


    const [checked, setChecked] = useState(itemDelevery)
    const handleChecked = (item) => {
        setChecked(item)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
        setChecked(itemDelevery)
    }


    const handleSubmitDelivery = () => {
        const key = localStore.getCurrentDelivery().key
        localStorage.setItem(key, JSON.stringify([checked]))
        setIsOpenModal(false)
        setRerenderOut(Math.random())
    }


    return (
        <div className={s.wrapper}>
            <div className={s.wrapper__delivery}>
                <div className={s.wrapper__delivery_title}>
                    <FontAwesomeIcon icon={faTruck} />
                    <h1>Đơn vị vận chuyển</h1>
                </div>
                <div className={s.wrapper__delivery_info}>
                    <h1>{itemDelevery.name} <span onClick={handleOpenModal}>Thay đổi</span></h1>
                    <h2>{itemDelevery.des}</h2>
                </div>

            </div>
            <div className={s.wrapper__price}>
                <h1>{util.formatCurrency(itemDelevery.price)}</h1>
            </div>

            {
                isOpenModal &&
                <Modal>
                    <div className={s.modal_title}>
                        <Title>Chọn đơn vị vận chuyển</Title>
                    </div>

                    <div className={s.modal_content}>
                        {
                            deliveryMethod.map((item, index) => (
                                <div key={index}
                                    className={item.name === checked.name ? s.item_active : s.item_inActive}
                                    onClick={() => handleChecked(item, index)}>
                                    <div className={s.leftSide}>
                                        <h1>{item.name} <span>{util.formatCurrency(item.price)}</span></h1>
                                        <h2>{item.des}</h2>
                                    </div>
                                    <div className={s.rightSide}>
                                        <CheckboxOutside
                                            noLable
                                            item={item.name}
                                            onchange={() => handleChecked(item)}
                                            checked={item.name === checked.name}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={s.modal_button}>
                        <Button outlineBlack onClick={handleCloseModal} >Trở lại</Button>
                        <Button pink onClick={handleSubmitDelivery} >Hoàn thành</Button>
                    </div>
                </Modal>
            }


        </div>
    )
}

export default Delivery