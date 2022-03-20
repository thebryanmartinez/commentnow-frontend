import { type } from "@testing-library/user-event/dist/type";

const defaultSecurity = {
  username: '',
  jwtToken: '',
  roles: [],
  _id: '',
}

export const securityReducer = (state = defaultSecurity, action) => {
  const {type, payload} = action || {}
  switch(type){
    case 'ON_SIGN_IN_LOADING':
      break;
    case 'ON_SING_IN_SUCCESS':
      break;
    case 'ON_SING_IN_ERROR':
      break;
    case 'ON_LOGIN LOADING':
      break;
    case 'ON_LOGIN_SUCCESS':
      break;
    case 'ON_LOGIN_ERROR':
      break;
    default:
      return state;
  }
}