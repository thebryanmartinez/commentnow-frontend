import Registrar from "./Registrar";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { publicAxios } from '../../Lib/apiClient'
import { useNavigate } from "react-router-dom";

const RegistrarPage = () => {
    const routerNavigator = useNavigate()
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => {return state.security})
  const [txtName, setTxtName] = useState('')
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPassword, setTxtPassword] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const [txtBirthDate, setTxtBirthDate] = useState('')
  /*const [txtConfirmPassword, setTxtConfirmPassword] = useState('')*/
  const [txtRecoveryQuestion, setTxtRecoveryQuestion] = useState('')
  const [txtRecoveryAnswer, setTxtRecoveryAnswer] = useState('')
  const [txtDescription, setTxtDescription] = useState('')
  const onChange = ({ target: {name, value }}) => {
    switch (name) {
        case 'txtName':
            setTxtName(value)
        break
        case 'txtUsername':
            setTxtUsername(value)
        break
        case 'txtEmail':
            setTxtEmail(value)
        break
        case 'txtDescription':
            setTxtDescription(value)
        break
        case 'txtBirthDate':
            setTxtBirthDate(value)
        break
        case 'txtPassword':
            setTxtPassword(value)
        break
        /*case 'txtConfirmPassword':
            setTxtConfirmPassword(value)
        break*/
        case 'txtRecoveryQuestion':
            setTxtRecoveryQuestion(value)
        break
        case 'txtRecoveryAnswer':
            setTxtRecoveryAnswer(value)
        break
        
      default:
        break
    }
  }

  const onConfirm = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const data = await publicAxios.post(
        '/api/v1/seguridad/signin',
        {
            names: txtName,
            username: txtUsername,
            email: txtEmail,
            description: txtDescription,
            birthdate: txtBirthDate,
            password: txtPassword,
            recoveryQuestion: txtRecoveryQuestion,
            recoveryAnswer: txtRecoveryAnswer
        }
      );
      console.log('Signin Request: ', data)
      const {jwt:jwtToken, user} = data.data
      dispatch({ type:'ON_SIGNIN_SUCCESS', payload:{jwtToken, ...user}})
      routerNavigator('/home') 
    } catch (error) {
      dispatch({type:'', payload:{errors:['Credenciales Incorrectas!']}})
      console.log('Error on Signin Request: ', error)
    }
  }

  const onCancel = async (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
      <>
      
    <Registrar
        txtNameValue={txtName}
        txtUsernameValue={txtUsername}
        txtEmailValue={txtEmail}
        txtDescriptionValue={txtDescription}
        txtBirthDateValue={txtBirthDate}
        txtPasswordValue={txtPassword}
        /*txtConfirmPasswordValue={txtConfirmPassword}*/
        txtRecoveryQuestion={txtRecoveryQuestion}
        txtRecoveryAnswer={txtRecoveryAnswer}
        onChangeHandler={onChange}
        errorTxtName=''
        errorTxtUsername=''
        errorTxtEmail=''
        errorTxtDescription=''
        errorTxtBirthDate=''
        errorTxtPassword=''
        /*errorTxtConfirmPassword=''*/
        errorTxtRecoveryQuestion=''
        errorTxtRecoveryAnswer=''
        
        onConfirmCrearCuenta={onConfirm}
        onCancelarClick={onCancel}
    />
    </>
  )
}

export default RegistrarPage;