import './LogInForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const LogInForm = ({ txtUsernameValue, txtPasswordValue, onChange: onChangeHandler, errorTxtUsername, errorTxtPassword }) => {
  return (
    <div className='loginform-desktop'>
      <div className='image-container'>
        <img src={imageLogo} alt="CommentNow Logo"></img>
      </div>
      <div className='loginform'>
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
        <div className='loginform-containers'>
          <PrimaryButton>Iniciar sesion</PrimaryButton>
          <a href=''><p>Olvidó su contraseña?</p></a>
        </div>
        <div className='loginform-containers'>
          <p>No tienes usuario?</p>
          <SecondaryButton>Crear cuenta</SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default LogInForm;