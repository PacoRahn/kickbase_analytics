const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/kickbase', async (req, res) => {
  try {
    const response = await axios.get('https://api.kickbase.com'); // Adjust with a real endpoint
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Kickbase API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});