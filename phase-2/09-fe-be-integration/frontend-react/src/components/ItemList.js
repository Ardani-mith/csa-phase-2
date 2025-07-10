// src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}/items`);
      setItems(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch items');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = editItem ? editItem.name : newItemName;
    
    if (!name.trim()) return;

    try {
      if (editItem) {
        const { data } = await axios.put(`${API_URL}/items/${editItem.id}`, { name });
        setItems(items.map(item => item.id === editItem.id ? data : item));
        setEditItem(null);
      } else {
        const { data } = await axios.post(`${API_URL}/items`, { name });
        setItems([...items, data]);
        setNewItemName('');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/items/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete item');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      {error && (
        <div className="error" onClick={() => setError(null)}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={editItem ? editItem.name : newItemName}
          onChange={(e) => editItem 
            ? setEditItem({ ...editItem, name: e.target.value })
            : setNewItemName(e.target.value)
          }
          placeholder="Enter item name"
        />
        <button type="submit">
          {editItem ? 'Update' : 'Add'} Item
        </button>
        {editItem && (
          <button type="button" onClick={() => setEditItem(null)}>
            Cancel
          </button>
        )}
      </form>

      <ul className="items">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div>
              <button onClick={() => setEditItem(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;