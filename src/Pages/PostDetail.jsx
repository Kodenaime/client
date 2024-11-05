import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container detail-container">
        <div className="detail-header">
          <PostAuthor />
          <div className="detail-btns">
            <Link to={`/posts/werver/edit`} className='btn'>Edit</Link>
            <Link to={`/posts/werver/delete`} className='btn.delete'>Delete</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetail