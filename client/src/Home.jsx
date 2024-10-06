import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' }; // Default to 'Guest' if no email is provided

  return (
    <div>
        <h1>Home Page</h1>
        <p>Welcome, {username}!</p> {/* Display the user's email */}
    </div>
  )
}
