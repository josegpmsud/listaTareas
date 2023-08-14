import React from 'react';

const CommentItem = ({ comment, onDelete }) => {
  return (
    <div>
      <span>{comment.text}</span>
      <button onClick={() => onDelete(comment.id)}>Eliminar</button>
    </div>
  );
};

export default CommentItem;