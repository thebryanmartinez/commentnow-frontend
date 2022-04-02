import './SignInForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const SignInForm = ({ txtUsernameValue, txtPasswordValue, onChange: onChangeHandler, errorTxtUsername, errorTxtPassword }) => {
  return (
    <div className='signinform-desktop'>
      <div className='image-container'>
        <img src={imageLogo} alt="CommentNow Logo"></img>
      </div>
      <div className='signinform'>
        <Title>CommentNow</Title>
        <Input
          type="text"
          name="txtUsername"
          placeholder="Username"
          value={txtUsernameValue}
          error={errorTxtUsername}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtPassword"
          placeholder="Password"
          value={txtPasswordValue}
          error={errorTxtPassword}
          info="Minimo 5 caracteres"
          onChange={onChangeHandler}
        />
        <div className='signinform-containers'>
          <PrimaryButton>Iniciar sesion</PrimaryButton>
          <a href=''><p>Olvidó su contraseña?</p></a>
        </div>
        <div className='signinform-containers'>
          <p>No tienes usuario?</p>
          <SecondaryButton>Crear cuenta</SecondaryButton>
        </div>
        <PrimaryButton>Archila</PrimaryButton>
      </div>
    </div>
  )
}

export default SignInForm;