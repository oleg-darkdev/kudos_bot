import textData from '../../exportTextData'


export default (howManyQuestionsOnBd, howManyAnswersOnBd, counterAnswers, postsAfterClickPrintPosts) => `В списке ${howManyQuestionsOnBd} вопросов и  ${howManyAnswersOnBd} ответов, до конца списка осталось ${howManyQuestionsOnBd - counterAnswers}. Для открытия следующих ${postsAfterClickPrintPosts} вопросов нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two} в правом углу.`
