import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';
import { usuarioReducer } from './Usuario/Usuario.reducer';

export const rootReducer = combineReducers({
  security: securityReducer,
  usuario: usuarioReducer
});