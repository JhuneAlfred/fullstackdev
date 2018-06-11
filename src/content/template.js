import React, { Component } from 'react'
import { Header } from '../components/header'

export const Template = ({ title, text }) => (
  <div>
    <Header />
    <div className="page-info" style={{ height: '100%' }}>
      {title}
      <p>
        <div className="page-content">{text}</div>
      </p>
    </div>
  </div>
)
