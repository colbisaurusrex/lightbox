const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 8080;

app.listen(port)
app.use(express.static(path.join(__dirname, '../dist')));
