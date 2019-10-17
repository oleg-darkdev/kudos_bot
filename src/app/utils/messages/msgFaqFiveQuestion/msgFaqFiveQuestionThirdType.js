import textData from '../../exportTextData'


export default (howManyQuestionsOnBd, howManyAnswersOnBd) => `В списке ${howManyQuestionsOnBd} вопросов и  ${howManyAnswersOnBd} ответов. Для открытия последних вопросов в списке нажми на кнопку ${textData.cmdText.store.printFiveLots} ${textData.eN.five} в правом углу.`
