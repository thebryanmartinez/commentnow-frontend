import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../UX/Loading/Loading';

import { privateAxios } from '../../Lib/apiClient';

import Usuario from './UsuarioC';

const UsuarioPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'USUARIO_LOADING', payload:{}});
        try {
          const { data: {usuario, status}} = await privateAxios.get('/api/v1/usuarios/byByUsername/Archila2112');    
          dispatch({type:'USUARIO_SUCCESS', payload: {usuario}});    
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'USUARIO_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { usuario,isLoading, errors } = useSelector(state=>state.usuario);
  return (
    <>
      {isLoading && (<Loading/>)}
      
      <Usuario usuario={usuario} />
    </>
  )
}

export default UsuarioPage;
