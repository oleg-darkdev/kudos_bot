const cl = require('node-cl-log')
const requestFunc = require('../requestFunc')
const sqlRequests = require('./sqlRequests')

let data = requestFunc(sqlRequests.main)
console.log(data)



// const sqlRequestAllTableData = "SELE`CT * from admins";
// const sqlRequestAllTableData = "SELECT * from events"; ---
// const sqlRequestAllTableData = "SELECT * from feedback";
// const sqlRequestAllTableData = "SELECT * from catalog";


