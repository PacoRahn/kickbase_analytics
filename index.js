const express = require('express');
const fetchData = require('./fetchData');
const app = express();

// Function to fetch data from multiple APIs


// Route to display combined API responses at the root endpoint
app.get('/', async (req, res) => {
  try {
    const kickbaseData = await fetchData();
    res.json(kickbaseData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from APIs' });
  }
});

// Route to test Kickbase API
/*app.get('/api/kickbase', async (req, res) => {
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
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});