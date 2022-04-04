import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';
import { publicacionesReducer } from './Publicaciones/Publicaciones.reducer';
import { usuarioReducer } from './Usuario/Usuario.reducer';

export const rootReducer = combineReducers(
  {
    security: securityReducer,
    usuario: usuarioReducer,
    publicaciones: publicacionesReducer
  }
);

