import './Posts.css'
import React from 'react'
import Post from '../Post/Post'
import WritePost from '../WritePost/WritePost'

export const Posts = ({ publicaciones, onConfirm, onChange }) => {
  console.log(publicaciones)
  const posts = publicaciones[0].map(post => {
    return (
      <Post key={post.id} {...post} />
    )
  })

  return (
    <div>
      <WritePost onConfirm={onConfirm} onChange={onChange}/>
      <div className="posts-container">
      <Post/>
      <Post/>
     
      </div>
        

    </div>
  )
}

export default Posts;