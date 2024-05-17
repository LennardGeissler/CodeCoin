import express, { json } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
// const express = require('express');
// const fetch = require('node-fetch')

const app = express();
const port = 5001; // Wähle einen freien Port

app.use(express.json());
app.use(cors());

// Proxy-Anfrage an CoinMarketCap-API senden
app.get('/', async (req, res) => {
  const apiKey = 'e2a75147-c1ad-4929-8a74-780732aaa231';
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error proxying request to CoinMarketCap API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy-Server is running on port ${port}`);
});

var cryptos = {
  id: 1001,
  name: 'Bitcoin',
  data: {
    price: 123.34,
    
  }
}

cryptos.data.price