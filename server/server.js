const express = require('express');
const app = express();
const port = 8080;

app.listen(port)
app.use(express.static('../client'))
