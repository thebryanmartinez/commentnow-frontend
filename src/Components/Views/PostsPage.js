import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { privateAxios, publicAxios } from '../../Lib/apiClient';
import Posts from './Posts'
const PostsPage = () => {
  const dispatch = useDispatch();

  const [txtWritePost, setTxtWritePost] = useState('')
  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtWritePost':
        setTxtWritePost(value)
        break
      default:
        break
    }
  }

  const onConfirm = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const data = await privateAxios.post(
        '/api/v1/publicaciones/new',
        {
          contenido: txtWritePost
        }
      );
      console.log('Write Post Request: ', data)

      dispatch({ type: 'WRITE_POST_SUCCESS', payload: { data } })
    } catch (error) {
      dispatch({ type: 'WRITE_POST_FAILED', payload: { errors: ['Error al realizar la publicacion'] } })
      console.log('Error on Write Post Request: ', error)
    }
  }

  useEffect(
    () => {
      const loadData = async () => {
        try {
          const { data: { publicaciones } } = await privateAxios.get('/api/v1/publicaciones/all')
          dispatch({ type: 'PUBLICACIONES_SUCCESS', payload: { publicaciones } })
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
    <>
      <Posts
        txtWritePostValue={txtWritePost}
        onConfirm={onConfirm}
        publicaciones={[publicaciones]}
      />
    </>
  )
}

export default PostsPage