import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../Assets/avatar11.jpg'
import { FaFileImage } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setAvatar] = useState('')

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={`/myposts/sdfsfd`} className='btn primary'>My Posts</Link>

        <div className="profile-details">
          <div className="avatar-wrap">
            <div className="profile-avatar">
              <img src={avatar} alt="" />
            </div>
            {/* an input form to update the profile image */}
            <form className="profile-form">
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label htmlFor="avatar"><FaFileImage /></label>
            </form>
            <button className='avatar-btn'><FaCheck /></button>
          </div>

          <h1>Kode Kyojuro</h1>

        </div>
      </div>
    </section>
  )
}

export default UserProfile