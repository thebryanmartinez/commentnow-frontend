import React from 'react'
import Page from '../UX/Page/Page'
import {EditarContraForm} from '../UX/EditarContraForm/EditarContraForm'

export const EditarCorreo = ({onConfirmClick, onCancelClick, onChangeHandler}) => {
  return (
    <Page>
      <EditarContraForm onConfirm={onConfirmClick} onCancel={onCancelClick} onChange={onChangeHandler}/>
    </Page>
  )
}

export default EditarCorreo;