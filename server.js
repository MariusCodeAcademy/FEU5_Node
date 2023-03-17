// const express = require('express') // common js
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

const arr = [1, 2, 3, 4];

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/posts', (req, res) => {
  res.status(201).json(arr);
});
app.get('/posts/:id', (req, res) => {
  res.status(200).json({ msg: 'single post page' });
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

app.listen(3000, () => {
  console.log('backas sukasi and port localhost:3000');
});
