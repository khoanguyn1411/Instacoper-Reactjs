import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { validate } from '../../../constants';

import { Button, CheckboxOutside, InputField, Title } from '../../../smallComponents'
import s from './FormLogin.module.scss'

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()
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
                validate.isRequired(emailRef.current,'email'),
                validate.isEmail(emailRef.current,'email'),
                validate.isRequired(passwordRef.current,'password')
            ],
            onSubmit: handleSubmit
        })
    }, [])

    return (
        <div className={s.wrapper} ref={formRef}>
            <Title>ĐĂNG NHẬP</Title>
            <div className={s.input}>
                <InputField type = 'password' ref={emailRef} value={email} setValue={setEmail} placeholder='Email' />
                <span className={s.error}></span>
            </div>
            <div className={s.input}>
                <InputField type = 'password' ref={passwordRef} value={password} setValue={setPassword} placeholder='Mật khẩu' />
                <span className={s.error}></span>
            </div>
            <div className={s.addtionPassword}>
                <CheckboxOutside item='Ghi nhớ mật khẩu' />
                <h2>Quên mật khẩu?</h2>
            </div>

            <div className={s.button}>
                <Button ref={btnRef} black>Đăng nhập</Button>
                <div className={s.button__or}>
                    <div />
                    <h3>OR</h3>
                    <div />
                </div>
                <Button onClick = {handleSubmit} outlineBlack icon={<FcGoogle />}>Đăng nhập với Google</Button>
            </div>
            <div className={s.lastText}>
                <h4>Bạn chưa có tài khoản? </h4>
                <Link to='/dang-ky'>Đăng ký</Link>
            </div>

        </div>
    )
}

export default FormLogin