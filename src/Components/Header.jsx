import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.png'
import { FaWindowClose } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className='logo'>
          <img src={logo} alt="logo of the website" />
        </Link>
      

        <ul className="nav-menu">
          <li><Link to="/profile">Kode</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>

        <button className="toggle-btn">
          <FaBarsProgress />
        </button>
      </div>
    </nav>
  )
}

export default Header