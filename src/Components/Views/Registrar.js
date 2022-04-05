import React from 'react'
import Page from '../UX/Page/Page'
import RegistrarForm from '../UX/RegistrarForm/RegistrarForm'

export const Registrar = ({onConfirmCrearCuenta, onCancelarClick, onChangeHandler}) => {
  return (
    <Page>
      <RegistrarForm onConfirm={onConfirmCrearCuenta} onCancel={onCancelarClick} onChange={onChangeHandler}/>
    </Page>
  )
}

export default Registrar;