// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("MysQL DB connection - connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

/*
Username	ws76lnh43qfxigac
Password	oug9jvk4hlrla2ge
mysql://ws76lnh43qfxigac:oug9jvk4hlrla2ge@r1bsyfx4gbowdsis.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306
ubq0yfylewcne7i9
*/