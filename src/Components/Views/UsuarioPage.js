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

  useEffect(
    () => {
      const loadData = async () => {
        dispatch({type:'PUBLICACIONES_LOADING', payload:{}});
        try {
          const {data: {publicaciones,status}} = await privateAxios.get('/api/v1/publicaciones/byByUsername/Archila2112')
          console.log(publicaciones);
          dispatch({type:'PUBLICACIONES_SUCCESS', payload: {publicaciones}})
        } catch (error) {
          console.log(error)
          dispatch({ type: 'PUBLICACIONES_FAILED', payload: {} })
        }
      }
      loadData();
    }
    , []);
  const { publicaciones,isLoadingpublicacion, errors2 } = useSelector(state => state.publicaciones);
  const { usuario,isLoading, errors } = useSelector(state=>state.usuario);
  return (
    <>
      {isLoading && (<Loading/>)}
      {isLoadingpublicacion && (<Loading/>)}  
      <Usuario usuario={usuario} publicaciones={publicaciones} />
    </>
  )
}

export default UsuarioPage;
