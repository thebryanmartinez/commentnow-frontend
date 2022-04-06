import EditarContra from "./EditarContra";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { publicAxios } from '../../Lib/apiClient'
import { useNavigate } from "react-router-dom";

const EditarContraPage = () => {
  const routerNavigator = useNavigate()
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => {return state.security})
 
  const [txtRespuesta, setTxtRespuesta] = useState('Logan')
  const [txtContra, setTxtContra] = useState('Roberto21')
  const onChange = ({ target: {name, value}}) => {

    switch (name) {
        case 'txtRespuesta':
            setTxtRespuesta(value)
        break
        case 'txtContra':
        setTxtContra(value)
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
        '/api/v1/seguridad/recoverpassword',
        {
          username: "Roberto",
          recoveryAnswer: txtRespuesta,
          newPassword: txtContra
        }
      );
      console.log('Editar Contraseña Request: ', data)
      const {jwt:jwtToken, user} = data.data
      dispatch({ type:'ON_EDITAR_CONTRASEÑA_SUCCESS', payload:{jwtToken, ...user}})
      routerNavigator('/home') 
    } catch (error) {
      dispatch({type:'', payload:{errors:['Credenciales Incorrectas!']}})
      console.log('Error on Editar Contraseña Request: ', error)
    }
  }

  const onCancel = async (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <EditarContra
        txtAnswerValue={txtRespuesta}
        txtPasswordValue={txtContra}
        onChangeHandler={onChange}
        /*errorTxtPassword={errors.length && errors.join(' ')}*/
        onConfirmClick={onConfirm}
        onCancelClick={onCancel}
      />
    </>
  )
}

export default EditarContraPage;