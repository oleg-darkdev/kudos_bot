// import cl from 'node-cl-log'
const sqlite = require('sqlite-sync'); //requiring

import { dbPath }  from '../../secretData'
sqlite.connect(dbPath);

// function sqlstr(s) { return "'" + s.replace(/, /g, "', '") + "'"; }

module.exports = (table, column, value) => {

  // let strColumn = column.join(",");

  sqlite.run(`UPDATE ${table} SET ${column} = ${value};`, function (res) {
    if (res.error) throw res.error;
  });
}


// sqlite.run(`INSERT INTO ${table}(${strColumns}) VALUES();`, function (res) {
//   if (res.error)  throw res.error;

//       ticketsCounter = res;
// });
// return ticketsCounter
