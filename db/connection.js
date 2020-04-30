const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "shivansh2019",
    database: "employees"
});

//connect to database
/*connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
 
});
*/
connection.connect();
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports=connection;