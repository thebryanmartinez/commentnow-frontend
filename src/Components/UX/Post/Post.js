import './Post.css';
import React, { useState, useEffect } from 'react'
import { Heart, MessageSquare } from 'react-feather';

export const Post = () => {
  return (
    <div className="post">
      <div className="post--username-container">
        <div className="post-name">Bryan Martínez</div>
        <div className="post-username">@thebryanmartinez</div>
      </div>
      <div className='post--info-container'>
        <p>Lorem ipsum dolor sit ? Dolorem modi maxime veritatis? Aliquam, molestiae. asdfe asldkkfj als;dkfj asdlk asd;fsli isdafke sadf ;laskdjf brya nadlksjd</p>
      </div>
      <p className="post--date">Publicado: 01/04/2022</p>
      <div className='post--actions'>
        <div className="post--actions-likes">
          <Heart fill='' />
          <p>2</p>
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
