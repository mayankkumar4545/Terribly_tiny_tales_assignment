// Import React library for creating React components
import React from 'react';

// Import Header component
import Header from './Header';

// Import ProfileDetail component
import ProfileDetail from './ProfileDetail';

// Import posts data from 'posts.json' file
import posts from '../utils/posts.json';

// Import PostCard component
import PostCard from './PostCard';

// Import CSS file for styling the ProfilePage component
import './ProfilePage.css';

// ProfilePage component definition
function ProfilePage() {
  // Render JSX for the ProfilePage component
  return (
    <>
      {/* Include the Header component */}
      <Header />

      {/* Include the ProfileDetail component */}
      <ProfileDetail />

      {/* Main content section for displaying posts */}
      <div className='posts'>
        {/* Map through the posts data and render a PostCard for each post */}
        {posts.map(post => <PostCard post={post} />)}
      </div>
    </>
  );
}

// Export the ProfilePage component as the default export from this module
export default ProfilePage;
