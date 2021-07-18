const fs = require('fs');
const http = require('http');
const noteArray = require('./db/db.json')
const path = require('path')
const PORT = process.env.PORT || 3000
const express = require("express");
const { networkInterfaces } = require('os');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')))
app.get('/api/notes', (req,res) => res.sendFile(path.join(__dirname, './db/db.json')))



app.post('/api/notes', (req,res) => {
   const newNote = req.body;
   console.log(noteArray)
   noteArray.push(newNote)
   noteArray.forEach((note, index)=>{
      note.id = index + 1;
   })
   fs.writeFile(path.join(__dirname,'./db/db.json'), JSON.stringify(noteArray), (err) =>{
      console.log(err)
   })
  res.end();

})

app.delete('/api/notes', (req,res) => {

})







app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));