const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxy = require('http-proxy-middleware')
const app = express();

const PORT = process.env.PORT || 8008;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/photos/:id', proxy({
  target: 'http://ec2-18-206-121-61.compute-1.amazonaws.com'
}));

app.listen(PORT, () => {
  console.log(`Listening to server at http://localhost:${PORT}`);
})