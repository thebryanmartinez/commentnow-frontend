import './Post.css';
import React from 'react'
import { Heart, MessageSquare } from 'react-feather';

export const Post = (props) => {
  return (
    <div className="post">
      <div className="post--username-container">
        <div className="post-name">@{props.username}</div>
      </div>
      <div className='post--info-container'>
        <p>{props.contenido}</p>
      </div>
      <p className="post--date">Publicado: {props.fecha}</p>
      <div className='post--actions'>
        <div className="post--actions-likes">
          <Heart fill='' />
          <p>{props.likes}</p>
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
