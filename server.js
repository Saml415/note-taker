const fs = require('fs');
const http = require('http');
const path = require('path')
const PORT = process.env.PORT || 3000
const express = require("express")
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')))
app.get('/api/notes', (req,res) => res.sendFile(path.join(__dirname, './db/db.json')))



app.post('/api/notes', (req,res) => {
   console.log(req.body)
})









app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));