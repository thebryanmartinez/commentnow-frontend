import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';
import { publicacionesReducer } from './Publicaciones/Publicaciones.reducer';

export const rootReducer = combineReducers(
  {
    security: securityReducer,
    publicaciones: publicacionesReducer
  }
);