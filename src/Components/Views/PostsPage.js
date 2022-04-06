import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { privateAxios } from '../../Lib/apiClient';
import Posts from './Posts'
const PostsPage = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      const loadData = async () => {
        try {
          const {data: {publicaciones}} = await privateAxios.get('/api/v1/publicaciones/all')
          dispatch({type:'PUBLICACIONES_SUCCESS', payload: {publicaciones}})
          console.log(publicaciones)
        } catch (error) {
          console.log(error)
          dispatch({ type: 'PUBLICACIONES_FAILED', payload: {} })
        }
      }
      loadData();
    }
    , []);
  const { publicaciones, errors } = useSelector((state) => state.publicaciones);

  
  return (
    <Posts publicaciones={[publicaciones]} />
  )
}

export default PostsPage