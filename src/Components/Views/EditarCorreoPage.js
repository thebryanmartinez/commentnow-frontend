import EditarCorreo from "./EditarCorreo";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { publicAxios } from '../../Lib/apiClient'
import { useNavigate } from "react-router-dom";

const EditarCorreoPage = () => {
  const routerNavigator = useNavigate()
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => {return state.security})
  const [txtId, setTxtId] = useState('')
  const [txtEmail, setTxtEmail] = useState('')
  const onChange = ({ target: {name, value}}) => {
    switch (name) {
      case 'txtId':
        setTxtId(value)
        break
      case 'txtEmail':
        setTxtEmail(value)
        break
      default:
        break
    }
  }

  const onConfirm = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const data = await publicAxios.put(
        '/api/v1/usuarios/updateemail/624bc2de391e6738a11d0398',
        {
          email: txtEmail
        }
      );
      console.log('Editar Correo Request: ', data)
      const {jwt:jwtToken, user} = data.data
      dispatch({ type:'ON_EDITAR_CORREO_SUCCESS', payload:{jwtToken, ...user}})
      routerNavigator('/home') 
    } catch (error) {
      dispatch({type:'', payload:{errors:['Credenciales Incorrectas!']}})
      console.log('Error on Editar Correo Request: ', error)
    }
  }

  const onCancel = async (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <EditarCorreo
        txtIdValue={txtId}
        txtEmailValue={txtEmail}
        onChangeHandler={onChange}
        errorTxtId=''
        /*errorTxtPassword={errors.length && errors.join(' ')}*/
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarCorreoPage;