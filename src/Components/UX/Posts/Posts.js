import './Posts.css'
import React from 'react'
import Post from '../Post/Post'

export const Posts = () => {
  return (
    <div className="posts-container">
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts;