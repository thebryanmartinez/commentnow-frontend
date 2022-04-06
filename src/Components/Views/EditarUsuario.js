import React from 'react'
import Page from '../UX/Page/Page'
import {EditarUsuarioForm} from '../UX/EditarUsuarioForm/EditarUsuarioForm'

export const EditarCorreo = ({onConfirmClick, onCancelClick, onChangeHandler}) => {
  return (
    <Page>
      <EditarUsuarioForm onConfirm={onConfirmClick} onCancel={onCancelClick} onChange={onChangeHandler}/>
    </Page>
  )
}

export default EditarCorreo;