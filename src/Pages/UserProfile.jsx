import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../Assets/avatar11.jpg'
import { FaFileImage } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  return (
    <section className="profile">
      <div className="container profile-container">
        <Link to={`/myposts/sdfsfd`} className='btn primary'>My Posts</Link>

        <div className="profile-details">
          <div className="avatar-wrap">
            <div className="profile-avatar">
              <img src={avatar} alt="" />
            </div>
            {/* an input form to update the user's profile image */}
            <form className="profile-form">
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg' />
              <label htmlFor="avatar"><FaFileImage /></label>
            </form>
            <button className='avatar-btn'><FaCheck /></button>
          </div>

          <h1>Kode Kyojuro</h1>

          {/* an input form to update the user's profile details */}

          <form className="former profile-former">
            <p className="form-error">This an error message</p>
            <input type="text" placeholder="Fullname" value={name} onChange={e => setName(e.target.value)} autoFocus/>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Old password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
            <input type="password" placeholder="New password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type="password" placeholder="Confirm New password" value={confirmNewPassword} onChange={e =>setConfirmNewPassword(e.target.value)} />
            <button type='submit' className='btn'>Update</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default UserProfile