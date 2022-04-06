import React from 'react'
import Page from '../UX/Page/Page'
import Posts from '../UX/Posts/Posts'
import Header from '../UX/Header/Header'

export const PostsPage = ({publicaciones, onConfirm, onChange}) => {
  return (
    <Page header={<Header/>}>
      <Posts publicaciones={publicaciones} onConfirm={onConfirm} onChange={onChange} />
    </Page>
  )
}

export default PostsPage;