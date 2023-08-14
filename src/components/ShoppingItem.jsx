import React from 'react';

const ShoppingItem = ({ item, onDelete }) => {
  return (
    <div>
      <span>{item}</span>
      <button onClick={() => onDelete(item)}>Eliminar</button>
    </div>
  );
};

export default ShoppingItem;