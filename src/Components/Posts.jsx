import React, { useState } from 'react'

import PostItem from './PostItem'

import thumb1 from '../Assets/blog10.jpg'
import thumb2 from '../Assets/blog9.jpg'
import thumb3 from '../Assets/blog17.jpg'
import thumb4 from '../Assets/blog45.jpg'

const DUMMY =  [
    {
        id: '1',
        thumbnail: thumb1,
        category: 'entertainment',
        title: 'The first post',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium odio atque ex aliquid laboriosam.',
        authorID: 3
    },
    {
        id: '2',
        thumbnail: thumb2,
        category: 'games',
        title: 'The second post',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium odio atque ex aliquid laboriosam.',
        authorID: 1
    },
    {
        id: '3',
        thumbnail: thumb3,
        category: 'games',
        title: 'The third post',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium odio atque ex aliquid laboriosam.',
        authorID: 5
    },
    {
        id: '4',
        thumbnail: thumb4,
        category: 'other',
        title: 'The fourth post',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium odio atque ex aliquid laboriosam.',
        authorID: 11
    },
]   


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY)

  return (
    <section className="posts">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) =>
            <PostItem key={id} postID={id} thumbnail={thumbnail} title={title} 
            category={category} desc={desc} authorID={authorID} />)
        }
    </section>
  )
}
 
export default Posts