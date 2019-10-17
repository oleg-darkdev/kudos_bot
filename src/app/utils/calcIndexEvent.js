import requestFunc from './sqliteConnectors/requestFunc'
import eventsSqlRequests from './sqliteConnectors/events/sqlRequests'

let howAgileEventsOnDb = requestFunc(eventsSqlRequests.allAgileEvents).length,
    howTurqoiseEventsOnDb = requestFunc(eventsSqlRequests.allTurqoiseEvents).length,
    howWargeimingEventsOnDb = requestFunc(eventsSqlRequests.allWargmeiningEvents).length,
    temp = '';

export default (type, formate) => {
    if (type == '1') temp = howAgileEventsOnDb + 1 
    if (type == '2') temp = howTurqoiseEventsOnDb + 1 
    if (type == '3') temp = howWargeimingEventsOnDb + 1 
    return `${type}${formate}${temp}`
}


