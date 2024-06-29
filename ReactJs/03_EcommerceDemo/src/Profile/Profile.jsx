import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Mock user data (replace with actual user data from your application)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://plus.unsplash.com/premium_photo-1713788509783-6f674cb19981?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual path
  });

  // State variables for form fields
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState(null); // State for profile image file

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user profile (e.g., send data to server)
    setUser({ ...user, name, email });
    setEditing(false);
    console.log('Profile updated:', { name, email, profileImage });
  };

  // Function to handle file upload (profile image)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // You can add validation for file type and size here if needed
    setProfileImage(file);
  };

  // Function to toggle editing mode
  const toggleEditing = () => {
    setEditing(!editing);
    // Reset form fields to current user data when cancelling editing
    if (!editing) {
      setName(user.name);
      setEmail(user.email);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <img src={user.profileImage} alt="Profile" />
          <div className="imageDiv">
            <input
              type="file"
              id="profileImage"
              onChange={handleFileChange}
              accept="image/*" // Accept only image files
              disabled={!editing}
            />
          </div>
        </div>
        <div className="profile-details">
          {!editing ? (
            <>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-save">
                Save Changes
              </button>
              <button type="button" className="btn-cancel" onClick={toggleEditing}>
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
      {!editing && ( // Render the edit button only when not in editing mode
        <button className="btn-edit" onClick={toggleEditing}>
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Profile;
