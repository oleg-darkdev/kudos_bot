import textData from '../../exportTextData'

export default (howManyQuestionsOnBd, howManyAnswersOnBd, postsAfterClickPrintPosts) => `В списке ${howManyQuestionsOnBd} вопросов и  ${howManyAnswersOnBd} ответов. Чтобы посмотреть весь список вопрос, нажми кнопку ${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList} вводи с клавиатуры номер интересующего вопроса, если нужен весь список вопросов вместе с ответами - нажми ${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}. Для открытия следующих ${postsAfterClickPrintPosts} вопросов с ответами нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two} в правом углу.`


// console.log(textData.eN.five)