// Import React library for creating React components
import React from 'react';

// Import the CSS file for styling the PostCard component
import './PostCard.css';

// Import the 'like' image for displaying a like icon
import like from '../images/like.png';

// PostCard component definition
function PostCard({post}) {
  // Render JSX for the PostCard component
  return (
    // Main container div with the class name 'postCard' for styling
    <div className='postCard'>
      
      {/* Post header section */}
      <div className='postHead'>
        {/* Display the post title */}
        <h3>{post.title}</h3>
        
        {/* Display the like icon */}
        <img src={like} alt='like' height="20px" width="20px"/>
      </div>
      
      {/* Post description section */}
      <p className='postDesc'>{post.desc}</p>
      
      {/* Post details section */}
      <div className='postDetail'>
        {/* Display post tag and author information */}
        <p className='postTag'><span>{post.tag}</span> by anuj</p>
        
        {/* Display additional details in an unordered list */}
        <ul>
          {/* Display the published date of the post */}
          <li>{post.publishedDate}</li>
          
          {/* Display the estimated time to read the post */}
          <li>{post.timeToRead} mins Read</li>
          
          {/* Display the number of views for the post */}
          <li>{post.views} Views</li>
        </ul>
      </div>
    </div>
  );
}

// Export the PostCard component as the default export from this module
export default PostCard;
