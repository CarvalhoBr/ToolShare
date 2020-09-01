import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.get(('/'), async (req, res) => {
  res.json({ ok: true });
});

server.listen(3333);
