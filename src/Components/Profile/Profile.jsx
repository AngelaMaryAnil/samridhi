import React, { useContext } from 'react';
import './Profile.css';
import { FaEdit } from 'react-icons/fa';
import { UserContext } from '../../UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container" >
      <div className="profile-info">
        <div className="profile-details">
          <h1>{user.name}</h1>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Farmer:</strong> {user.farmer ? 'Yes' : 'No'}</p>
          <p><strong>State:</strong> {user.state}</p>
          <p><strong>District:</strong> {user.district}</p>
          <div className="profile-actions">
            <button className="edit-btn"><FaEdit /> Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;