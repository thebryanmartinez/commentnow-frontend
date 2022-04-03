import { setJWT } from '../../../Lib/apiClient'

const defaultSecurity = {
  username: '',
  jwtToken: '',
  roles: [],
  _id: '',
  errors: [],
  // isLoading: false
}

export const securityReducer = (state = defaultSecurity, action) => {
  const {type, payload} = action || {}
  switch(type){
    case 'ON_SIGN_IN_LOADING':
      break;
    case 'ON_SIGN_IN_SUCCESS':
      break;
    case 'ON_SIGN_IN_ERROR':
      break;
    case 'ON_LOGIN LOADING':
      break;
    case 'ON_LOGIN_SUCCESS':
      setJWT(payload.jwtToken)
      return {...state, ...payload}
      break;
    case 'ON_LOGIN_ERROR':
      return {...state, errors: payload.errors}
      break;
    default:
      return state;
  }
}