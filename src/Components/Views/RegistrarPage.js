import Registrar from "./Registrar";
import { useState } from 'react'

const RegistrarPage = () => {

  const [txtName, setTxtName] = useState('')
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPassword, setTxtPassword] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtBirthDate, setTxtBirthDate] = useState('')
  const [txtConfirmPassword, setTxtConfirmPassword] = useState('')
  const [txtDescription, setTxtDescription] = useState('')
  const onChangeHandler = ({ target: name, value }) => {
    switch (name) {
        case 'txtName':
            setTxtName(value)
        break
        case 'txtUsername':
            setTxtUsername(value)
        break
        case 'txtPassword':
            setTxtPassword(value)
        break
        case 'txtEmail':
            setTxtEmail(value)
        break
        case 'txtBirthDate':
            setTxtBirthDate(value)
        break
        case 'txtConfirmPassword':
            setTxtConfirmPassword(value)
        break
        case 'txtDescription':
            setTxtDescription(value)
        break
      default:
        break
    }
  }

  return (
    <Registrar
        txtNameValue={txtName}
        txtUsernameValue={txtUsername}
        txtPasswordValue={txtPassword}
        txtEmailValue={txtEmail}
        txtBirthDateValue={txtBirthDate}
        txtConfirmPasswordValue={txtConfirmPassword}
        txtDescriptionValue={txtDescription}
        onChange={onChangeHandler}
        errorTxtName=''
        errorTxtUsername=''
        errorTxtPassword=''
        errorTxtEmail=''
        errorTxtBirthDate=''
        errorTxtConfirmPassword=''
        errorTxtDescription=''
    />
  )
}

export default RegistrarPage;