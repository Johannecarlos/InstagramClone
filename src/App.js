import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "cleverqazi",
      caption: "WOW it works",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
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

      <Post username="cleverqazi" caption="WOW it works" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
      <Post username="ssssangha" caption="DOPE" imageUrl="" />

    </div>
  );
}

export default App;
