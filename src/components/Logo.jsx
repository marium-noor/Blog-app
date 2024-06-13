import React from 'react'
import blog from '../assets/blog.svg'

function Logo({width = '100px', height = '100px'}) {
  return (
    <div>
      <img src={blog} style={{ width, height }} alt="Logo" />
      </div>
  )
}

export default Logo