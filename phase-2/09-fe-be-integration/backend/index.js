// backend/index.js
const express = require('express');
const cors = require('cors'); // Untuk mengatasi CORS Policy

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Mengizinkan permintaan dari origin manapun
app.use(express.json()); // Mengizinkan parsing body JSON

let items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
];

// Get all items
app.get('/api/items', (_, res) => {
    res.json(items);
});

// Add new item
app.post('/api/items', (req, res) => {
    const { name } = req.body;
    
    if (!name?.trim()) {
        return res.status(400).json({ message: 'Name is required' });
    }
    
    const newItem = {
        id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
        name: name.trim()
    };
    
    items.push(newItem);
    res.status(201).json(newItem);
});

// Update item
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    
    if (!name?.trim()) {
        return res.status(400).json({ message: 'Name is required' });
    }
    
    const item = items.find(item => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    
    item.name = name.trim();
    res.json(item);
});

// Delete item
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);
    
    if (index === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    
    items.splice(index, 1);
    res.status(204).send();
});

// Error handler untuk route yang tidak ditemukan
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route tidak ditemukan' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});