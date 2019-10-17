const cl = require( 'node-cl-log')
const requestFunc = require( '../requestFunc')
const sqlRequests = require( './sqlRequests')

let data = requestFunc(sqlRequests.getSettingsForProfile(18238))
// getSettingsForProfile: (id) => `SELECT firstName, secondName, id, valute, phoneNumber, country, town, readInstruction, email, orders, tickets from  users WHERE id LIKE '${id}'`,

// cl.mag(data.length)

