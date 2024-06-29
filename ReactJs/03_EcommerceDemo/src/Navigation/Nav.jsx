import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import './Nav.css';

const Nav = ({ handleInputChange, query }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/Profile');
  };

  return (
    <nav>
      <div className='inputDiv'>
      <input
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."
      />
      </div>
      <div className="profile-container1">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#" onClick={handleProfileClick}>
          <AiOutlineUserAdd className="nav-icons" />
        </a>
        <button className="nav-button" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
