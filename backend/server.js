const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Get all messages route
app.get('/api/messages', (req, res) => {
    const filePath = path.join(__dirname, 'messages.json');
    
    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const messages = fileData ? JSON.parse(fileData) : [];
        res.json({ success: true, messages });
    } else {
        res.json({ success: true, messages: [] });
    }
});

// Delete a specific message by index
app.delete('/api/messages/:index', (req, res) => {
    const messageIndex = parseInt(req.params.index);
    const filePath = path.join(__dirname, 'messages.json');

    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        let messages = fileData ? JSON.parse(fileData) : [];

        // Check karna ki index valid hai ya nahi
        if (messageIndex >= 0 && messageIndex < messages.length) {
            // Us index wale message ko array se hata dena
            messages.splice(messageIndex, 1);

            // Updated array ko wapas file mein save karna
            fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

            console.log(`🗑️ Message at index ${messageIndex} deleted!`);
            return res.json({ success: true, message: 'Message deleted successfully!' });
        } else {
            return res.status(404).json({ success: false, message: 'Message not found!' });
        }
    } else {
        return res.status(404).json({ success: false, message: 'Messages file not found!' });
    }
});

// Serve static frontend files from root directory
app.use(express.static(path.join(__dirname, '../')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});