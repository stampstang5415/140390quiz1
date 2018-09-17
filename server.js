var express = require('express');
var app = express();
var students;
var subjects;
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect()

connection.query('SELECT * from students', function (err, rows, fields) {
  if (err) throw err

  students = rows;
})

connection.query('SELECT * from subjects', function (err, rows, fields) {
    if (err) throw err
  
    subjects = rows;
  })
  
  connection.end()
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/Home');
});

app.get('/students', function(req, res) {
    res.render('pages/students',{students : students});
});

app.get('/subjects', function(req, res) {
    res.render('pages/subjects',{subjects : subjects});
});

console.log('App is running at http://localhost:8080');
app.listen(8080);

