// Import React library for creating React components
import React from 'react';

// Import user data from 'user.json' file
import user from '../utils/user.json';

// Import CSS file for styling the ProfileDetail component
import './ProfileDetail.css';

// Import profile images
import profileBackground from '../images/profileBackground.jpeg';
import profileImg from '../images/profileImg.jpeg';
import stars from '../images/stars.png';
import like from '../images/like.png';
import views from '../images/views.png';
import love from '../images/love.png';

// ProfileDetail component definition
function ProfileDetail() {
  // Render JSX for the ProfileDetail component
    return (
    <div>
      {/* Display the profile background image */}
    <img src={profileBackground} alt='profileBackground' height="200px" width="100%" />

      {/* Main profile details section */}
    <div className='profileDetails'>
        {/* User profile section */}
        <div className='userProfile'>
          {/* Display user profile image */}
        <img src={profileImg} alt='profileImg' className='profileImg' height="100px" width="100px" />

          {/* User information section */}
        <div>
            {/* Display user name */}
            <h2>{user.name}</h2>

            {/* Display user followers and following count */}
            <div className='userCount'>
            <span>
                <h2>{user.followers}</h2> Followers
            </span>
            <span>
                <h2>{user.following}</h2> Following
            </span>
            </div>
        </div>
        </div>

        {/* Additional profile details section */}
        <div className='profileDetail'>
          {/* Display user description */}
        <p>{user.desc}</p>

          {/* Display user Instagram link */}
        <a href={user.socialMedia.instagram}>{user.socialMedia.instagram}</a>

          {/* Display user analytics with icons */}
        <div className='userAnalytics'>
            <img src={stars} alt='stars' height="20px" width="20px" />
            <p>{user.stars}</p>
            <img src={like} alt='likes' height="20px" width="20px" />
            <p>{user.likes}</p>
            <img src={views} alt='views' height="20px" width="20px" />
            <p>{user.views}</p>
            <img src={love} alt='love' height="20px" width="20px" />
            <p>{user.love}</p>
        </div>
        </div>
    </div>

      {/* Horizontal line for separation */}
    <hr />
    </div>
);
}

// Export the ProfileDetail component as the default export from this module
export default ProfileDetail;
