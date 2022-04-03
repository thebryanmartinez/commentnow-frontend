import React from 'react'
import Post from '../Post/Post'
import DataUsuario from '../DataUsuario/DataUsuario'


export const Usuario = () => {
  return (
    <div>
       <div >
        <DataUsuario />
       </div> 
      <div className="posts-container">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Usuario;