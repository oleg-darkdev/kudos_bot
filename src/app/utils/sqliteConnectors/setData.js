// import cl from 'node-cl-log'
const sqlite = require('sqlite-sync');

import { dbPath }  from '../../secretData'
sqlite.connect(dbPath);

let ticketsCounter = []

let oleg = 1
function sqlstr(s) { return "'" + s.replace(/, /g, "', '") + "'"; } 

module.exports = (table, columns, values) => {

    let 
    // strValues = values.join(", "),
        strColumns = columns.join(",");
    sqlite.run(`INSERT INTO ${table}(${strColumns}) VALUES(` + sqlstr(values) + `);`, function (res) {
    if (res.error)  throw res.error;
    
        ticketsCounter = res;
});
return ticketsCounter
}

// function sqlstr(s) { return "'" + s.replace(/'/g, "''") + "'"; } var query = 'INSERT INTO books(title) VALUES(' + sqlstr(book) + ');';
// id, promocode, date, firstName, secondName, numberOnList, donate, place, addres, timeStart, organisator
// INSERT INTO COMPANY(ID, NAME, AGE, ADDRESS, SALARY)
// VALUES(1, 'Tom', 32, 'California', 20000.00);


/* sqlite.run(`INSERT INTO tickets (id, promocode, date, firstName, secondName, numberOnList, donate, place, addres, timeStart, organisator)
VALUES(${values})`, function (res) {
 */