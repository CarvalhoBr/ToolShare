import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.get(('/'), (req, res) => {
  res.send('ok');
});

server.listen(3333);
