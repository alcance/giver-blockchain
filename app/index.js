const express = require('express');

const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3003;
const bodyParser = require('body-parser');
const app = express();

const bc = new Blockchain();
app.use(bodyParser.json());

app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

app.post('/give', (req, res) => {
  const block = bc.addBlock(req.body.data);
  console.log(`Block added: ${block.toString()}`);
  res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => {
  console.log('Giver Blockchain - HTTP Server on port ' + HTTP_PORT);
});
