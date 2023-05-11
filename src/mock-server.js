require('@babel/register');
const express = require('express');
const http = require('http');
const data = require('./assets/stock-price.js').default;
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/stockprice/:code', (req, res) => {
  const code = req.params.code;
  const product = data[code];

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});


app.listen(3000, () => {
  console.log('Mock server is running on http://localhost:3000');
});
