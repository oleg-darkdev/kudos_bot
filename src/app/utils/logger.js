const cl = require('node-cl-log'),
  moment = require('moment');

let time = new Date().toISOString().match(/(\d{2}:){2}\d{2}/)[0];
const logger = (ctx) => {

  cl.log(`date: ${moment().format('dddd, MMMM Do YYYY')} ${time}`);
  cl.log(`user: id: ${ctx.from.id} | first name: ${ctx.from.first_name} | username : ${ctx.from.username} | language code: ${ctx.from.language_code}`)
  cl.log('')
}

export default logger