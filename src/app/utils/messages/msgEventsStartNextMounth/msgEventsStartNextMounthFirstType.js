import textData from '../../exportTextData'

export default (howManyEventsOnBd, postsAfterClickPrintPosts) => `На ближайший месяц пройдет ${howManyEventsOnBd} мероприятий. Чтобы посмотреть прошедшие нажми кнопку ${textData.eB.eve.eventsEnd} ${textData.menuText.events.eventsEnd}, если посмотреть список мероприятий на которые ты зарегистрирован  ${textData.eB.eve.myEvents} ${textData.menuText.events.myEvents}. Для просмотра следующих ${postsAfterClickPrintPosts} мероприятий нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two} в правом углу.`


// console.log(textData.eN.five)