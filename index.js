const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const async = require('async');

// cors 걸러주기
app.use(cors());

const PORT = process.env.PORT;

// 모든 코인
app.get('/api', function(req, res) {
  let coins = [];

  let data = axios
    .get('https://api.cryptowat.ch/assets')
    .then(function(response) {
      coins = response.data;
      console.log(coins);

      res.header('Content-type', 'application/json');
      res.header('Charset', 'utf8');
      res.send(coins);
    })
    .catch(function(error) {
      console.log(error);
    });
});

// 특정 코인 거래소
app.get('/api/:CoinName', function(req, res) {
  let coins = [];

  let data = axios
    .get(`https://api.cryptowat.ch/assets/${req.params.CoinName}`)
    .then(function(response) {
      coins = response.data;
      console.log(coins);

      res.header('Content-type', 'application/json');
      res.header('Charset', 'utf8');
      res.send(coins);
    })
    .catch(function(error) {
      console.log(error);
    });
});

// 특정 거래소의 특정 코인 시세
app.get('/api/:CoinName/:Market', function(req, res) {
  let coins = [];

  let data = axios
    .get(
      `https://api.cryptowat.ch/markets/${req.params.CoinName}/${
        req.params.Market
      }/summary`
    )
    .then(function(response) {
      coins = response.data;
      console.log(coins);

      res.header('Content-type', 'application/json');
      res.header('Charset', 'utf8');
      res.send(coins);
    })
    .catch(function(error) {
      console.log(error);
    });
});

app.listen(PORT);
