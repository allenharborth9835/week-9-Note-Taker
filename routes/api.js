const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const {v4: uuidv4} = require('uuid');

var read = () =>{
  return JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')), "utf8");
} ;

router.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname,'../db/db.json'));
});

router.post('/notes', (req,res)=>{
  var noteID = uuidv4();
  
  const{title, text} = req.body;
  
  const addedNote = { title: title, text: text, id: noteID}

  let notes = read();
  console.log(notes);
  notes.push(addedNote)

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));

  console.log('note added');
  res.json(addedNote);
})

router.delete('/notes/:id', (req, res)=>{
  const params = req.params.id;
  if(params){
    const notes = read();
    const result = notes.filter(notes => notes.id !== params);
    console.log("note deleted")
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(result));
    res.sendFile(path.join(__dirname,'../db/db.json'));
  }else{
    res.send(404);
  }
  console.log('note deleted');
})

module.exports = router;