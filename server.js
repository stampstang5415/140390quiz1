var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/Home');
});

app.get('/students', function(req, res) {
    var name = 'Patiphan Wibunchat';
    var hobbies = ['Music','Movie','Programming'];
    var bdate = '09/10/2018';
    res.render('pages/about', {name :name , hobbies : hobbies , bdate : bdate});
});

app.get('/products', function(req, res) {
    var id = req.param('id');
    var sql = 'select * from products';
    if(id){

        sql += ' where id = ' +id;
    }

    
    db.any(sql, )
        .then(function(data){
            console.log('data' + data);
            res.render('pages/products',{products : data});
        })
        .catch(function(error){

            console.log('ERROR'+ error);

        })

    
});

app.get('/users/:id', function(req, res) {
    var id = req.param('id');
    var sql = 'select * from users';

    if(id){

        sql += ' where id = ' +id;
    }

    
    db.any(sql)
        .then(function(data){
            console.log('data' + data);
            res.render('pages/users',{users : data});
        })
        .catch(function(error){

            console.log('ERROR'+ error);

        })


   
    
        
    
});
console.log('App is running at http://localhost:8080');
app.listen(8080);

