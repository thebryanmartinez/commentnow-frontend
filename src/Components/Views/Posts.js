import React from 'react'
import Page from '../UX/Page/Page'
import Posts from '../UX/Posts/Posts'
import Header from '../UX/Header/Header'

export const PostsPage = () => {
  return (
    <Page header={<Header/>}>
      <Posts/>
    </Page>
  )
}

export default PostsPage;