import SignIn from "./SignIn";
import { useState } from 'react'

const SignInPage = () => {

  const [txtUsername, setTxtUsername] = useState('')
  const [txtPassword, setTxtPassword] = useState('')
  const onChangeHandler = ({ target: name, value }) => {
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

  return (
    <SignIn
      txtUsernameValue={txtUsername}
      txtPasswordValue={txtPassword}
      onChange={onChangeHandler}
      errorTxtUsername=''
      errorTxtPassword=''
    />
  )
}

export default SignInPage;