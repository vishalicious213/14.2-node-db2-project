const express = require('express');
const carRouter = require('./carRouter');
const server = express();

server.use('/api', carRouter);

server.get('/', (req, res) => {
  res.send('Hello from Express');
});

server.listen(5000, () =>
  console.log('Server running on http://localhost:5000')
);