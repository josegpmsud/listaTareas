import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: '¡Este es un gran artículo!' },
    { id: 2, text: 'Gracias por compartir esta información.' },
    { id: 3, text: 'Me encantó, muy útil.' },
  ]);

  const handleAddComment = () => {
    const newComment = {
      id: Date.now(),
      text: prompt("Ingresa el comentario"),
    };

    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div>
      <h2>Comentarios</h2>
      <button onClick={handleAddComment}>Agregar Comentario</button>
      <div>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;