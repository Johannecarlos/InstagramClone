import React from 'react'

function Post() {
  return (
    <div>
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img className="post_image" src="https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png"
      alt=""
      />

      {/* image */}

      <h4>Username: caption</h4>
      {/* username + caption */}
    </div>
  )
}

export default Post