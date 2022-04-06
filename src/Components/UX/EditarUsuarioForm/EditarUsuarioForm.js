import './EditarUsuarioForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const EditarUsuarioForm = ({ txtUserValue, onChange: onChangeHandler, errorTxtUser, onConfirm: onConfirmClick, onCancel: onCancelClick }) => {
  return (
    <div className='loginform-desktop'>
      <div className='loginform'>
        <Title>Editar Nombre de Usuario</Title>
        <Input
          type="text"
          name="txtUser"
          placeholder="Username"
          value={txtUserValue}
          error={errorTxtUser}
          /*info="Minimo 5 caracteres"*/
          onChange={onChangeHandler}
        />
        <div className='loginform-containers'>
          <PrimaryButton onClick={onConfirmClick}>Cambiar</PrimaryButton>
        </div>
        <div className='loginform-containers'>
          <SecondaryButton onClick={onCancelClick}>Cancelar</SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default EditarUsuarioForm;