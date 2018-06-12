import React, { Component } from 'react'
import { Template } from './template'
import PostList from '../container/post_list'

const homeContent = (
  <div style={{ color: '#000' }}>
    <h3>Top Questions:</h3>
    <PostList />
  </div>
)

export default homeContent
