import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../Assets/avatar13.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfd`} className='post-author' >
        <div className="author-image">
            <img src={avatar} alt="author image" />
        </div>
        <div className="author-details">
            <h5>By: Kode Kyojuro</h5>
            <small>just now</small>
        </div>
    </Link>
  )
}

export default PostAuthor