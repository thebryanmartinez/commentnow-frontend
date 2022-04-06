import React from 'react'
import Page from '../UX/Page/Page'
import Posts from '../UX/Posts/Posts'
import Header from '../UX/Header/Header'

export const PostsPage = ({publicaciones}) => {
  return (
    <Page header={<Header/>}>
      <Posts publicaciones={publicaciones}/>
    </Page>
  )
}

export default PostsPage;