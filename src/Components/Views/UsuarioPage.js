import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { publicAxios} from '../../Lib/apiClient';

import UsuarioC from './UsuarioC';


const UsuarioPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        
        try {
          const { data: {  status}} = await publicAxios.get('/api/v1/usuarios/byByUsername/Archila2112');
       
        } catch(ex){
          console.log(ex);
        
        }
      }
      loadData();
    }
    ,[]
  );

  return (
    <>
     
      <UsuarioC/>
    </>
  )
}

export default UsuarioPage;
