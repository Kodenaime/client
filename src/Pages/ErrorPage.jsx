import React from 'react'

import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
      <div className="error">
        <div className="center">
          <Link to="/" className='btn'>Back Home</Link>
          <h2>Page Not Found</h2>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage