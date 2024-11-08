import React, { useState } from 'react'

import { DUMMY } from '../data'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const [posts, setPosts] = useState(DUMMY)

  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard-container">
          {
            posts.map(post => {
              return <article key={post.id} className="dashboard-post">
                <div className="dashboard-left">
                  <div className="dashboard-image">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>

                <div className="dashboard-right">
                  <Link to={`/posts/${post.id}`} className="btn white">View</Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn primary">Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn delete">Delete</Link>
                </div>
              </article>
            })
          }
        </div> : <h2 className="center">You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard