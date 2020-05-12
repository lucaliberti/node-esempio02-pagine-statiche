

var express = require('express');
var app = express();
const path = require('path');
const wwwdir=path.join(__dirname, '../www')


app.get('/',function(req,res){
  res.sendFile(path.join(wwwdir, 'index.html')); //__dirname : Ritorna la cartella del progetto
});


app.get('/about',function(req,res){
  res.sendFile(path.join(wwwdir, 'about.html')); //__dirname : Ritorna la cartella del progetto

  let url = req.url;
  console.log("url="+url);
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(wwwdir, 'sitemap.html')); //__dirname : Ritorna la cartella del progetto
});


//app.get('/*' , function(req, res){
app.get('*' , function(req, res){

  //-----------
  //res.setHeader('Content-Type', 'text/plain');
  // res.status(status).send(body)
  // res.status(404).send('La pagina non esiste amico!')

  //-----------
  let url = req.url;
  console.log("url="+url);
  res.status(404).sendFile(path.join(wwwdir, '404.html')); //__dirname : Ritorna la cartella del progetto
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

