import React, { useState } from 'react'
import PostItem from '../Components/PostItem'
import { DUMMY } from '../data'

const CategoryPosts = () => {

  const [posts, setPosts] = useState(DUMMY)

  return (
     <section className="category-posts">
        <div className="container categoryposts-container">
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

export default CategoryPosts