// Import React library for creating React components
import React from 'react';

// Import CSS file for styling the Header component
import './Header.css';

// Import logo image
import logo from '../images/logo.svg';

// Header component definition
function Header() {
  // Render JSX for the Header component
  return (
    // Main container div with the class name 'header' for styling
    <div className='header'>
      
      {/* Display the logo image */}
      <img src={logo} alt='logo' height="30px" width="30px" />
      
      {/* Display a button with the class name 'courses' */}
      <button className='courses'>Courses</button>
    </div>
  );
}

// Export the Header component as the default export from this module
export default Header;
