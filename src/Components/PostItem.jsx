import React from 'react'

import { Link } from 'react-router-dom'
import PostAuthor  from './PostAuthor'

const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {

    const fullLenght = desc.lenght > 50 ? desc.substr(0, 50) + '...' : desc;
    const fullTitle = title.lenght > 25 ? title.substr(0, 25) + '...' : title;

  return (
    <article className="post">
        <div className="post-image">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post-content">
            <Link to={`/posts/${postID}`} ><h3>{ fullTitle }</h3></Link>
            <p>{ fullLenght }</p>
        </div>
        <div className="post-down">
            <PostAuthor />             
        </div>
        <Link to={`/posts/categories/${category}`} className='btn category'>{ category }</Link>
    </article>
  )
}

export default PostItem