const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.send('rendering from server! - made it this far');
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
