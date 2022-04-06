import React from 'react'
import Post from '../Post/Post'
import DataUsuario from '../DataUsuario/DataUsuario'


export const Usuario = (usuario) => {
  
  return (
    <div>
       <div >
        <DataUsuario {...usuario}/>
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