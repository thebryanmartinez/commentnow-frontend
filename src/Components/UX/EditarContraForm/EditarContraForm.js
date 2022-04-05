import './EditarContraForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const EditarContraForm = ({ txtAnswerValue, txtPasswordValue, onChange: onChangeHandler, errorTxtAnswer, errorTxtPassword, onConfirm: onConfirmClick, onCancel: onCancelClick }) => {
  return (
    <div className='loginform-desktop'>
      <div className='loginform'>
        <Title>Editar Contraseña</Title>
        <Input
          type="text"
          name="txtAnswer"
          placeholder="Answer"
          value={txtAnswerValue}
          error={errorTxtAnswer}
          /*info="Minimo 5 caracteres"*/
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtPassword"
          placeholder="Password"
          value={txtPasswordValue}
          error={errorTxtPassword}
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

export default EditarContraForm;