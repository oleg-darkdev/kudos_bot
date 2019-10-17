import requestFunc from './sqliteConnectors/requestFunc'
import sqlRequests from './sqliteConnectors/events/sqlRequests'

const eventsList = requestFunc(sqlRequests.main),
    postsAfterClickPrintPosts = 2; 
    
let eventsForNextPost = []

export default (startNumberEvent, ctx, next) => {
    eventsForNextPost = eventsList.slice(startNumberEvent, startNumberEvent + postsAfterClickPrintPosts)
    return eventsForNextPost
}
