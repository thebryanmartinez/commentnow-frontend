import './EditarCorreoForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const EditarCorreoForm = ({ txtIdValue, txtEmailValue, onChange: onChangeHandler, errorTxtId, errorTxtEmail, onConfirm: onConfirmClick, onCancel: onCancelClick }) => {
  return (
    <div className='loginform-desktop'>
      <div className='loginform'>
        <Title>Editar Correo</Title>
        <Input
          type="text"
          name="txtId"
          placeholder="Id"
          value={txtIdValue}
          error={errorTxtId}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtEmail"
          placeholder="Email"
          value={txtEmailValue}
          error={errorTxtEmail}
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

export default EditarCorreoForm;