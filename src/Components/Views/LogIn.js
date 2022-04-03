import React from 'react'
import Page from '../UX/Page/Page'
import LogInForm from '../UX/LogInForm/LogInForm'

export const LogIn = ({onConfirmClick, onCancelClick, onChangeHandler}) => {
  return (
    <Page>
      <LogInForm onConfirm={onConfirmClick} onCancel={onCancelClick} onChange={onChangeHandler}/>
    </Page>
  )
}

export default LogIn;