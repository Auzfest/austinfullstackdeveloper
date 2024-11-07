import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
    <div class="left-bar">
        <div class="left-container">
        {/* <img src="images/AustinBarnes.JPG" alt="Photo of Austin" class="profile-photo"> */}
        <p class="website-title">Austin Barnes | Full Stack Web Developer</p>
        <Navbar />
      </div>
    </div>
    );
}

export default Header;