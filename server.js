const api = require('./routes/api');
const html = require('./routes/html')

const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

//app middle ware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//app uses routes for api and html
app.use('/api', api);
app.use('/', html);

app.listen(PORT, ()=>{
  console.log(`API server now on port ${PORT}`)
})