import './Posts.css'
import React from 'react'
import Post from '../Post/Post'
import WritePost from '../WritePost/WritePost'

export const Posts = () => {


  return (
    <div>
     
      <div className="posts-container">
      <Post/>
      <Post/>
     
      </div>
        

    </div>
  )
}

export default Posts;