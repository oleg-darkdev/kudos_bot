// import cl from 'node-cl-log'
const sqlite = require('sqlite-sync');

import { dbPath }  from '../../secretData'
sqlite.connect(dbPath);


let answerData = []

module.exports = (path) => {
    sqlite.run(path, function (res) {
    if (res.error)
        throw res.error;

        answerData = res;
});
    return answerData
}