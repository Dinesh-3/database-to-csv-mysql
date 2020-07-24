const mysql      = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Dinesh@3',
    database : "productdb"
  });
  
  
db.connect((err) => {
      if(err){
          throw new Error(err)
      }else{
          console.log("Database connected successfully");
      }
  
  });


module.exports = db;

