import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
    },
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
    }
  ]);

  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
        />
      </div>
      
      <h1>HELLO Clever Programmers Let's build an Instagram Clone with React!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl="" />
        ))
      }

      <Post username="cleverqazi" caption="WOW it works" imageUrl="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png" />
      <Post username="ssssangha" caption="DOPE" imageUrl="" />

    </div>
  );
}

export default App;
