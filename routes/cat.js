const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact');
    const catFact = response.data.fact;
    res.render('cat/fact', { catFact });
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    res.status(500).send('Error fetching cat fact');
  }
});

module.exports = router;