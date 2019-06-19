var mysql = require("mysql");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  connection = mysql.createConnection({
    host: "alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "vo9iogfs0fik3t6w",
    password: "bn5i68jtg9y38mnm",
    database: "burgers_db"
  });
// }


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;