import React, { useState, useEffect } from 'react';
import './Post.css';
import { db } from './firebase';
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot => {
        setComments(snapshot.docs.map((doc) => doc.data()));
      }));
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      usename: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');
  }

  return (
    <div className="post">
      <div className="post_header">
      <Avatar
        className="post_avatar"
        alt='RafehQazi'
        src="/static/images/avatar/1.jpg"
      />
      <h3>{username}</h3>
      </div>

      <img className="post_image" src={imageUrl} alt=""/>

      <h4 className="post_text"><strong>{username}</strong>{caption}</h4>

      <div className="app_comments">
        {comments.map((comment) => (
         <p>
          <strong>{comment.username}</strong> {comment.text}
         </p>
         ))}
      </div>

      {user && (
      <form className="post_commentBox">
      <input
          className="post_input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post_button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
          >
            Post
          </button>
      </form>
      )}

    </div>
  )
}

export default Post