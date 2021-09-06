const express = require('express');
const path = require('path');
const router = express.Router();

//route that brings in the html for notes
router.get('/notes',(req, res)=>{
  res.sendFile(path.join(__dirname,'../public/notes.html'));
});

//route that brings in html for index
router.get('', (req,res)=>{
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

module.exports = router;