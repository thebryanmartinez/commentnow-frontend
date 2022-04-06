import './RegistrarForm.css'
import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Button/Button'
import Input from '../Input/Input';
import Title from '../Title/Title'
import imageLogo from '../../../Images/CommentNowLogo/logo-completo-bg.png'

export const RegistrarForm = ({ txtNameValue, txtUsernameValue, txtPasswordValue, txtEmailValue, txtBirthDateValue, txtConfirmPasswordValue, txtRecoveryQuestionValue, txtRecoveryAnswerValue, txtDescriptionValue, onChange: onChangeHandler, errorTxtName, errorTxtUsername, errorTxtPassword, errorTxtEmail, errorTxtBirthDate, errorTxtConfirmPassword, errorTxtDescription, errorTxtRecoveryQuestion, errorTxtRecoveryAnswer, onConfirm: onConfirmCrearCuenta, onCancel: onCancelarClick}) => {
  return (
    <div className='registrarform-desktop'>
      {/* <div className='image-container'>
        <img src={imageLogo} alt="CommentNow Logo"></img>
      </div> */}
      <div className='registrarform'>
        <Title>Registro de usuario</Title>
        <Input
          type="text"
          name="txtName"
          placeholder="Name"
          value={txtNameValue}
          error={errorTxtName}
          onChange={onChangeHandler}
        />
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
          name="txtEmail"
          placeholder="Email"
          value={txtEmailValue}
          error={errorTxtEmail}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtDescription"
          placeholder="Description"
          value={txtDescriptionValue}
          error={errorTxtDescription}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtBirthDate"
          placeholder="BirthDate"
          value={txtBirthDateValue}
          error={errorTxtBirthDate}
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
        <Input
          type="text"
          name="txtRecoveryQuestion"
          placeholder="RecoveryQuestion"
          value={txtRecoveryQuestionValue}
          error={errorTxtRecoveryQuestion}
          onChange={onChangeHandler}
        />
        <Input
          type="text"
          name="txtRecoveryAnswer"
          placeholder="RecoveryAnswer"
          value={txtRecoveryAnswerValue}
          error={errorTxtRecoveryAnswer}
          onChange={onChangeHandler}
        />
        
        <div className='registrarform-containers'>
          <PrimaryButton onClick={onConfirmCrearCuenta}>Crear Cuenta</PrimaryButton>
        </div>
        <div className='registrarform-containers'>
          <SecondaryButton onClick={onCancelarClick}>Cancelar</SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default RegistrarForm;