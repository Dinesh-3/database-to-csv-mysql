const express = require("express");
const router = express.Router();
const csvWriter = require("../csv/csv.js")
const db = require("../database/mysql.js");

let getData = 'SELECT * FROM products';

db.query(getData, (err, data) => {
    if(err) throw err;
    csvWriter.writeRecords(data);
});

router.get("/download",(req,res) => {
    res.download("./data.csv")
})

module.exports = router;