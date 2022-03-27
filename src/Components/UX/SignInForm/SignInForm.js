import React from 'react'
import { PrimaryButton } from '../Button/Button'
import Input from '../Input/Input';

export const SignInForm = ({ txtUsernameValue, txtPasswordValue, onChange: onChangeHandler, errorTxtUsername, errorTxtPassword }) => {
  return (
    <div className='SignInForm'>
      <Input
        label="Username"
        type="text"
        name="txtUsername"
        placeholder="Username"
        value={txtUsernameValue}
        error={errorTxtUsername}
        onChange={onChangeHandler}
      />
      <Input
        label="Password"
        type="text"
        name="txtPassword"
        placeholder="Password"
        value={txtPasswordValue}
        error={errorTxtPassword}
        info="Minimo 5 caracteres"
        onChange={onChangeHandler}
      />
      <PrimaryButton>Crear cuenta</PrimaryButton>
    </div>
  )
}

export default SignInForm;