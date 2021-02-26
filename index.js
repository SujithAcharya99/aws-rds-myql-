const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: "database-1.c04vmsu91e5q.eu-central-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "sujiawsrds",
    database: "testDB",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));



// Get all table data
app.get('/testdb', (req, res) => {
    mysqlConnection.query('SELECT * FROM Persons', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an Persons
app.get('/Persons/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Persons WHERE PersonID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an Persons
app.delete('/Persons/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Persons WHERE PersonID = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert an Persons
app.post('/Persons', (req, res) => {
    let person = req.body;
    var sql = "SET @PersonID = ?;SET @LastName = ?;SET @FirstName = ?;SET @Address = ?;SET @City = ?; \
    CALL PersonsAddOrEdit(@PersonID,@LastName,@FirstName,@Address,@City);";
    mysqlConnection.query(sql, [person.PersonID, person.LastName, person.FirstName, person.Address, person.City], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted Person id : '+element[0].PersonID);
            });
        else
            console.log(err);
    })
});
