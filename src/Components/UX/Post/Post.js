import './Post.css';
import React from 'react'
import { Heart, MessageSquare } from 'react-feather';

export const Post = () => {
  return (
    <div className="post">
      <div className="post--username-container">
        <div className="post-name">@Archila2112</div>
      </div>
      <div className='post--info-container'>
        <p>Hola muy buenas a todos</p>
      </div>
      <p className="post--date">Publicado: 12/11/12</p>
      <div className='post--actions'>
        <div className="post--actions-likes">
          <Heart fill='' />
          <p>5</p>
        </div>
        <div className="post--actions-comments">
          <MessageSquare />
          <p>5</p>
        </div>
      </div>
    </div>
  )
}


export default Post;
