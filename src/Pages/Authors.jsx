import React, { useState } from 'react'

import avatar1 from '../Assets/avatar11.jpg'
import avatar2 from '../Assets/avatar13.jpg'
import avatar3 from '../Assets/avatar14.jpg'
import avatar4 from '../Assets/avatar17.jpg'
import avatar5 from '../Assets/avatar9.jpg'
import { Link } from 'react-router-dom'

const authorsInfo = [
  {id: 1, avatar: avatar1, name: 'Kode kyojuro', posts: 5},
  {id: 2, avatar: avatar2, name: 'Aomine Daiki', posts: 0},
  {id: 3, avatar: avatar3, name: 'Nazo Shinsui', posts: 3},
  {id: 4, avatar: avatar4, name: 'Kamado Tanjiro', posts: 1},
  {id: 5, avatar: avatar5, name: 'kagami Taiga', posts: 2}
]

const Authors = () => {

  const [authors, setAuthors] = useState(authorsInfo)

  return (
    <section className="authors">
      {authors.length > 0 ? <div className="container authors-container">
         {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author-image">
                  <img src={avatar} alt={`image of ${name}`} />
                </div>
                <div className="author-info">
                  <h4>{ name }</h4>
                  <small>{ posts }</small>
                </div>    
            </Link>
          })
         }
      </div> : <h2 className='center'>No authors found</h2>}
    </section> 
  )
}

export default Authors