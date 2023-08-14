import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems((prevItems) => [...prevItems, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToDelete));
  };

  return (
    <div>
      <h2>Lista de Compras</h2>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Agregar nuevo artículo"
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
      <div>
        {items.map((item, index) => (
          <ShoppingItem key={index} item={item} onDelete={handleDeleteItem} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;