import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
      <Avatar
        className="post_avatar"
        alt='RafehQazi'
        src="/static/images/avatar/1.jpg"
      />
      <h3>Username</h3>
      </div>
      
      <img className="post_image" src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"/>

      <h4 className="post_text"><strong>cleverqazi</strong>WOW day three of live sessions</h4>
    </div>
  )
}

export default Post