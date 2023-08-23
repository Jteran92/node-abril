var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productos_pdv"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM productos", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
});