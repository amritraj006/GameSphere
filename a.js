const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 🔴 Replace this with your actual API key
const NEWSAPI_KEY = "09c5ce275cc048098e82fa6f47a9aec8";  // Replace this with your key


app.use(cors());
app.use(express.json());

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'gaming',
                apiKey: NEWSAPI_KEY, // Directly using the API key
                sortBy: 'publishedAt',
                language: 'en'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching news', error: error.message });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
