import textData from '../../exportTextData'


export default (howManyEventsOnBd, postsAfterClickPrintPosts) => `В списке на ближайший месяц ${howManyEventsOnBd} мероприятий. Для просмотра следующих ${postsAfterClickPrintPosts} мероприятий нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}  в правом углу.`
