import textData from '../../exportTextData'


export default (howManyEventsOnBd, counterEvents, postsAfterClickPrintPosts) => `В списке на ближайший месяц ${howManyEventsOnBd} мероприятий, до конца списка осталось ${howManyEventsOnBd - counterEvents}. Для просмотра следующих ${postsAfterClickPrintPosts} мероприятий нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two} в правом углу.`
