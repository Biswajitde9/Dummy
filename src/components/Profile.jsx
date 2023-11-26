import React from 'react'

const Profile = ({currentUser}) => {
  return (
    <div>
        <h2>Welcome, {currentUser.name}!</h2>
        <h3>Profile</h3>
        <p>
           Name: {currentUser.name}
        </p>
    </div>
  )
}

export default Profile