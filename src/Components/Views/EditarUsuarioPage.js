import EditarUsuario from "./EditarUsuario";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { publicAxios } from '../../Lib/apiClient'
import { useNavigate } from "react-router-dom";

const EditarUsuarioPage = () => {
  const routerNavigator = useNavigate()
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => {return state.security})
  const [txtUser, setTxtUser] = useState('')
  const onChange = ({ target: {name, value}}) => {
    switch (name) {
      case 'txtUser':
        setTxtUser(value)
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
        '/api/v1/usuarios/updateusername/624bc2de391e6738a11d0398',
        {
          username: txtUser
        }
      );
      console.log('Editar Nombre de Usuario Request: ', data)
      const {jwt:jwtToken, user} = data.data
      dispatch({ type:'ON_EDITAR_NOMBRE_USUARIO_SUCCESS', payload:{jwtToken, ...user}})
      routerNavigator('/home') 
    } catch (error) {
      dispatch({type:'', payload:{errors:['Credenciales Incorrectas!']}})
      console.log('Error on Editar Nombre de Usuario Request: ', error)
    }
  }

  const onCancel = async (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <EditarUsuario
        txtUserValue={txtUser}
        onChangeHandler={onChange}
        /*errorTxtPassword={errors.length && errors.join(' ')}*/
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarUsuarioPage;