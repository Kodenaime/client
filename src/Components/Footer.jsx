import React from 'react'

import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <ul className="footer-categories">
          <li><Link to="posts/categories/Agriculture">Agriculture</Link></li>
          <li><Link to="posts/categories/Technology">Technology</Link></li>
          <li><Link to="posts/categories/Business">Business</Link></li>
          <li><Link to="posts/categories/Education">Education</Link></li>
          <li><Link to="posts/categories/Etertainment">Etertainment</Link></li>
          <li><Link to="posts/categories/Art">Art</Link></li>
          <li><Link to="posts/categories/Sports">Sports</Link></li>
          <li><Link to="posts/categories/Games">Games</Link></li>
          <li><Link to="posts/categories/Other">Other</Link></li>
        </ul>
      </div>
      <div className="footer-down">
        <div className="footer-socials">
          <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><BsLinkedin /></a>
          <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaSquareFacebook /></a>
          <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><FaSquareInstagram /></a>
          <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><FaSquareXTwitter /></a>
        </div>
        <div className="copy">
          <small>2024 KODE BLOG &copy; All Rights Reserved </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer