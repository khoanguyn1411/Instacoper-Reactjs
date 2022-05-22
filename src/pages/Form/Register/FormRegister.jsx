import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

import { validate } from '../../../constants'
import { Button, CheckboxOutside, InputField, Title } from '../../../smallComponents'
import s from '../Login/FormLogin.module.scss'

const FormRegister = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const formRef = useRef()
    const btnRef = useRef()
    const handleSubmit = () => {
        alert('Chức năng sẽ được phát triển trong tương lai. Cảm ơn bạn đã ghé thăm! ^^')
    }
    useEffect(() => {
        validate({
            btnSubmit: btnRef.current,
            groupInput: formRef.current,
            errorStyles: s.error,
            rules: [
                validate.isRequired(emailRef.current, 'email'),
                validate.isEmail(emailRef.current, 'email'),
                validate.isRequired(nameRef.current, 'name'),
                validate.isRequired(phoneRef.current, 'phone'),
                validate.isRequired(passwordRef.current, 'password'),
                validate.isValidPass(passwordRef.current, 'password'),
                validate.isRequired(confirmPasswordRef.current, 'confirmPass'),
                validate.isValidConfirmPassword(confirmPasswordRef.current, 'confirmPass', '' ,password),
            ],
            onSubmit: handleSubmit
        })
    }, [password])

    return (
        <div className={s.wrapper} ref={formRef}>
            <Title>ĐĂNG KÝ</Title>
            <div className={s.input}>
                <InputField ref={emailRef} value={email} setValue={setEmail} placeholder='Email' />
                <span className={s.error}></span>
            </div>

            <div className={s.input}>
                <InputField ref={nameRef} value={name} setValue={setName} placeholder='Họ & tên' />
                <span className={s.error}></span>
            </div>

            <div className={s.input}>
                <InputField ref={phoneRef} value={phone} setValue={setPhone} placeholder='Số điện thoại' />
                <span className={s.error}></span>
            </div>

            <div className={s.input}>
                <InputField type = 'password' ref={passwordRef} value={password} setValue={setPassword} placeholder='Mật khẩu' />
                <span className={s.error}></span>
            </div>

            
            <div className={s.input}>
                <InputField type = 'password' ref={confirmPasswordRef} value={confirmPassword} setValue={setConfirmPassword} placeholder='Nhập lại mật khẩu' />
                <span className={s.error}></span>
            </div>
            
            <div className={s.agree}>
                <p>Bằng cách tạo tài khoản, bạn có chấp nhận Chính sách bảo mật và Chính sách đổi trả của chúng tôi không?</p>
                <CheckboxOutside item = 'Tôi đồng ý'/>
            </div>

            <div className={s.button}>
                <Button ref={btnRef} black>Đăng ký</Button>
                <div className={s.button__or}>
                    <div />
                    <h3>OR</h3>
                    <div />
                </div>
                <Button onClick={handleSubmit} outlineBlack icon={<FcGoogle />}>Đăng ký với Google</Button>
            </div>
            <div className={s.lastText}>
                <h4>Đã có tài khoản? </h4>
                <Link to='/dang-nhap'>Đăng nhập ngay</Link>
            </div>

        </div>
    )
}

export default FormRegister