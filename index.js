// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : "database-1.c04vmsu91e5q.eu-central-1.rds.amazonaws.com",
//   port     : "3306",
//   user     : "admin",
//   password : "sujiawsrds"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();




// $host="database-1.c04vmsu91e5q.eu-central-1.rds.amazonaws.com";
// $port=3306;
// $socket="";
// $user="admin";
// $password="";
// $dbname="testDB";

// $con = new mysqli($host, $user, $password, $dbname, $port, $socket)
// 	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();

//******************************************************************************* */


// const mysql = require('mysql');
// const express = require('express');
// var app = express();
// const bodyparser = require('body-parser');

// app.use(bodyparser.json());

// var mysqlConnection = mysql.createConnection({
//     hostname: 'database-1.c04vmsu91e5q.eu-central-1.rds.amazonaws.com@18.197.79.19',
//     host: "database-1.c04vmsu91e5q.eu-central-1.rds.amazonaws.com",
//     // host: "18.156.173.177",
//     port: 3306,
//     user: "admin",
//     password: "sujiawsrds",
//     database: "testDB",
//     multipleStatements: true
// });

// mysqlConnection.connect((err) => {
//     if (!err)
//         console.log('DB connection succeded.');
//     else
//         console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
// });


// app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));



// // Get all table data
// app.get('/testdb', (req, res) => {
//     mysqlConnection.query('SELECT * FROM Persons', (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });

// //Get an Persons
// app.get('/Persons/:id', (req, res) => {
//     mysqlConnection.query('SELECT * FROM Persons WHERE PersonID = ?', [req.params.id], (err, rows, fields) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });

// //Delete an employees
// app.delete('/employees/:id', (req, res) => {
//     mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
//         if (!err)
//             res.send('Deleted successfully.');
//         else
//             console.log(err);
//     })
// });

// //Insert an employees
// app.post('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
//     CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
//     mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
//         if (!err)
//             rows.forEach(element => {
//                 if(element.constructor == Array)
//                 res.send('Inserted employee id : '+element[0].EmpID);
//             });
//         else
//             console.log(err);
//     })
// });

// //Update an employees
// app.put('/employees', (req, res) => {
//     let emp = req.body;
//     var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
//     CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
//     mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
//         if (!err)
//             res.send('Updated successfully');
//         else
//             console.log(err);
//     })
// });


//******************************************************* */
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();