import React from 'react'

import styles from '../FAQs.module.scss'

const Contact = () => {
    return (
        <div className='app__wrapper'>
            <div className={styles.wrapper}>
                <h1>Thông tin liên hệ</h1>referrerpolicy
                <p><b>Địa chỉ: </b>Số 669 Quốc lộ 1, khu phố 3 phường Linh Xuân, quận Thủ Đức, Thành phố Hồ Chí Minh</p>
                <p><b>Email: </b>support@instacoper.com</p>
                <p><b>Hotline: </b>0123 456 789</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2191164482465!2d106.77606661410455!3d10.870932092257437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175277dbf11a271%3A0x4567e34b99494e3f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaW5oIHThur8gLSBMdeG6rXQsIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1651837833204!5m2!1svi!2s" allowFullScreen= ""  referrerPolicy="no-referrer-when-downgrade" loading="lazy" ></iframe>
                <p>Thời gian hoạt động:</p>
                <ul>
                    <li>Ngày trong tuần: 8h30 - 22h</li>
                    <li>Cuối tuần: 9h - 17h</li>
                    <li>Ngày lễ: Nghỉ (theo thông báo trên fanpage)</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact