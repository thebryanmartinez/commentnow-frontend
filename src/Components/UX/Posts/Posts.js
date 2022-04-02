import './Posts.css'
import React from 'react'
import Post from '../Post/Post'
import WritePost from '../WritePost/WritePost'

export const Posts = () => {
  return (
    <div>
      <WritePost/>
      <div className="posts-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Posts;