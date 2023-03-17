import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app_header">
        <img
          className="app_headerImage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png"
        alt=""
        />
      </div>
      
      <h1>HELLO Clever Programmers Let's build an Instagram Clone with React!</h1>

      <Post username="cleverqazi" caption="WOW it works" imageUrl="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png" />
      <Post />
      <Post />

    </div>
  );
}

export default App;
