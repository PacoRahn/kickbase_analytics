const express = require('express');
const axios = require('axios');
const app = express();

// Function to fetch data from multiple APIs
const fetchData = async () => {
  try {
    const [kickbaseResponse, catResponse, jsonPlaceholderResponse] = await Promise.all([
      axios.get('https://api.kickbase.com'), // Adjust with real endpoint
      axios.get('https://catfact.ninja/fact'),
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
    ]);

    return {
      kickbase: kickbaseResponse.data,
      catFact: catResponse.data,
      jsonPlaceholder: jsonPlaceholderResponse.data
    };
  } catch (error) {
    console.error('Error fetching data from APIs:', error);
    throw new Error('Failed to fetch data from APIs');
  }
};

// Route to display combined API responses at the root endpoint
app.get('/', async (req, res) => {
  try {
    const combinedData = await fetchData();
    console.log('Combined API Response:', combinedData);
    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from APIs' });
  }
});

// Route to test Kickbase API
app.get('/api/kickbase', async (req, res) => {
  try {
    const { kickbase } = await fetchData();
    res.json(kickbase);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Kickbase API' });
  }
});

// Route to test Cat Facts API
app.get('/api/cat', async (req, res) => {
  try {
    const { catFact } = await fetchData();
    res.json(catFact);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Cat Facts API' });
  }
});

// Route to test JSONPlaceholder API
app.get('/api/jsonplaceholder', async (req, res) => {
  try {
    const { jsonPlaceholder } = await fetchData();
    res.json(jsonPlaceholder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from JSONPlaceholder API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});