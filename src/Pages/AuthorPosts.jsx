import React, { useState } from 'react'
import PostItem from '../Components/PostItem'
import { DUMMY } from '../data'

const AuthorPosts = () => {

  const [posts, setPosts] = useState(DUMMY)

  return (
    <section className="author-posts">
        <div className="container authorposts-container">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) =>
            <PostItem key={id} postID={id} thumbnail={thumbnail} title={title} 
            category={category} desc={desc} authorID={authorID} />)
        }
        </div>
        {/* { posts.lenght > 0 ? : <h2>No Post Yet</h2> } */}
    </section>
  )
}

export default AuthorPosts