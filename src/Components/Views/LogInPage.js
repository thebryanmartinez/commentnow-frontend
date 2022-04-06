import LogIn from "./LogIn";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { publicAxios } from '../../Lib/apiClient'
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const routerNavigator = useNavigate()
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => {return state.security})
  const [txtUsername, setTxtUsername] = useState('')
  const [txtPassword, setTxtPassword] = useState('')
  const onChange = ({ target: {name, value}}) => {
    switch (name) {
      case 'txtUsername':
        setTxtUsername(value)
        break
      case 'txtPassword':
        setTxtPassword(value)
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
        '/api/v1/seguridad/login',
        {
          username: txtUsername,
          password: txtPassword
        }
      );
      console.log('Login Request: ', data)
      const {jwt:jwtToken, user} = data.data
      dispatch({ type:'ON_LOGIN_SUCCESS', payload:{jwtToken, ...user}})
      routerNavigator('/home') 
    } catch (error) {
      dispatch({type:'ON_LOGIN_FAILED', payload:{errors:['Credenciales Incorrectas!']}})
      console.log('Error on Login Request: ', error)
    }
  }

  const onCancel = async (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <LogIn
        txtUsernameValue={txtUsername}
        txtPasswordValue={txtPassword}
        onChangeHandler={onChange}
        errorTxtUsername=''
        errorTxtPassword={errors.length && errors.join(' ')}
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default LogInPage;