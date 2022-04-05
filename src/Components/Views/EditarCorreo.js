import React from 'react'
import Page from '../UX/Page/Page'
import EditarCorreoForm from '../UX/EditarCorreoForm/EditarCorreoForm'

export const EditarCorreo = ({onConfirmClick, onCancelClick, onChangeHandler}) => {
  return (
    <Page>
      <EditarCorreoForm onConfirm={onConfirmClick} onCancel={onCancelClick} onChange={onChangeHandler}/>
      
    </Page>
  )
}

export default EditarCorreo;