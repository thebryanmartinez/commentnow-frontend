import './Posts.css'
import React from 'react'
import Post from '../Post/Post'
import WritePost from '../WritePost/WritePost'

export const Posts = ({ publicaciones }) => {
  console.log(publicaciones)
  const posts = publicaciones[0].map(post => {
    return (
      <Post key={post.id} {...post} />
    )
  })

  return (
    <div>
      <WritePost />
      <div className="posts-container">
        {posts}
      </div>
    </div>
  )
}

export default Posts;