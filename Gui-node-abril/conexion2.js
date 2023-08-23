var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productos_pdv"
});

con.connect();
let query = "SELECT * FROM productos";

const res = (err, result, fields) =>{
    if (err) throw err;
    return console.log(fields);
}

con.query(query, res);