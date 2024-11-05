import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import detail from '../Assets/blog15.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container detail-container">
        <div className="detail-header">
          <PostAuthor />
          <div className="detail-btns">
            <Link to={`/posts/werver/edit`} className='btn primary'>Edit</Link>
            <Link to={`/posts/werver/delete`} className='btn delete'>Delete</Link>
          </div>
        </div>

        <h1>Post title</h1>

        <div className="detail-image">
          <img src={detail} alt="" />
        </div>
        <p className='det-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequuntur recusandae sint, asperiores aliquam 
           necessitatibus ex eaque molestiae pariatur exercitationem 
           ut aliquid ab itaque quia repellendus debitis deleniti? 
           Dolor enim id amet non iure reiciendis voluptatem aut 
           inventore sequi minima consectetur pariatur voluptates
           iusto odio, in laborum temporibus sit cumque ea?
        </p>
        <p className='det-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequuntur recusandae sint, asperiores aliquam 
           necessitatibus ex eaque molestiae pariatur exercitationem 
           ut aliquid ab itaque quia repellendus debitis deleniti? 
           Dolor enim id amet non iure reiciendis.
        </p>
        <p className='det-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequuntur recusandae sint, asperiores aliquam 
           necessitatibus ex eaque molestiae pariatur exercitationem 
           ut aliquid ab itaque quia repellendus debitis deleniti? 
           Dolor enim id amet non iure reiciendis voluptatem aut 
           inventore sequi minima consectetur pariatur voluptates
           iusto odio, in laborum temporibus sit cumque ea?
           voluptatem aut 
           inventore sequi minima consectetur pariatur voluptates
           iusto odio, in laborum temporibus sit cumque ea?
        </p>
        <p className='det-desc'>
            voluptatem aut 
           inventore sequi minima consectetur pariatur voluptates
           iusto odio, in laborum temporibus sit cumque ea?
        </p>
        


      </div>
    </section>
  )
}

export default PostDetail