const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import emojiToNumbersConverter from '../../../../utils/emojiToNumbersConverter/emojiToNumbersConverter'
// import switchFirstSymbol from '../../../../utils/emojiToNumbersConverter/switchFirstSymbol.js'
// import switchSecondSymbol from '../../../../utils/emojiToNumbersConverter/switchSecondSymbol'

import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import msgFaqFiveQuestion from '../../../../utils/messages/msgFaqFiveQuestion'
import textData from '../../../../utils/exportTextData'


const {
    msgFaqFiveQuestionFirstType: msgFirstType,
    msgFaqFiveQuestionSecondType: msgSecondType,
    msgFaqFiveQuestionThirdType: msgThirdType

} = msgFaqFiveQuestion

const feedbackFaqAboutDarkDevEventsScene = new Scene('feedbackFaqAboutDarkDevEvents');
const postsAfterClickPrintPosts = 2

const answers = textData.msgText.faq.aboutDarkDev.events.answers,
    questions = textData.msgText.faq.aboutDarkDev.events.questions;

let howManyAnswersOnBd = answers.length,
    howManyQuestionsOnBd = questions.length,
    counterAnswers = 0;

let answersForNextPost = [],
    questionsForNextPost = [],
    numbersForNextPost = [];


let msg = '',
    firstStart = true,
    btnPanel = [];
// default  type object
const arrayEmojiQuestionNumbers = Object.values(textData.eB.fee.faq.questionNumbers); 

const printQuestionsListFunc = (questionList) => {
    let resultText = [];

    const lengthQuestionsList = questionList.length;


    for (let i = 0; i < lengthQuestionsList; i++) {
        resultText.push(`${arrayEmojiQuestionNumbers[i]}  ${textData.msgText.faq.aboutDarkDev.events.questions[i]}\n`)
    }
    return resultText = resultText.join('')
}

const printAnswerQuestionsListFunc = (questionList) => {

    let lengthQuestionsList = questionList.length
    let resultText = [];
    // 
    for (let i = 0; i < lengthQuestionsList; i++) {
        resultText.push(`${textData.cmdText.feedback.faq.questionNumber} ${arrayEmojiQuestionNumbers[i]} ${textData.msgText.faq.aboutDarkDev.events.questions[i]}\n

        ${textData.msgText.faq.aboutDarkDev.events.answers[i]} \n
        \n`)
    }
    return resultText = resultText.join('')
}

const printQuestionsList = (ctx, next) => {
    ctx.reply(`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}
${printQuestionsListFunc(textData.msgText.faq.aboutDarkDev.events.questions)}`).then(() => next())
}

const printAnswerQuestionsList = (ctx, next) => {
    ctx.reply(`${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}
${printAnswerQuestionsListFunc(textData.msgText.faq.aboutDarkDev.events.questions)}`).then(() => next())
}

const sliceAnswers = (startNumberAnswer, ctx, next) => {
    answersForNextPost = answers.slice(startNumberAnswer, startNumberAnswer + postsAfterClickPrintPosts)
    return answersForNextPost
}
const sliceQuestions = (startNumberQuestion, ctx, next) => {
    answersForNextPost = answers.slice(startNumberQuestion, startNumberQuestion + postsAfterClickPrintPosts)
    return answersForNextPost
}
const sliceNumbers = (startNumber, ctx, next) => {
    numbersForNextPost = answers.slice(startNumber, startNumber + postsAfterClickPrintPosts)
    return numbersForNextPost
}

let firstPost = (ctx, next) => {
    ctx.reply(`${ textData.cmdText.feedback.faq.questionNumber } ${ arrayEmojiQuestionNumbers[0] } ${ textData.msgText.faq.aboutDarkDev.events.questions[0] }\n

${ answersForNextPost[0]} \n
\n`).then(() => next())
}

let secondPost = (ctx, next, ) => {
    ctx.reply(`${ textData.cmdText.feedback.faq.questionNumber} ${arrayEmojiQuestionNumbers[1]} ${textData.msgText.faq.aboutDarkDev.events.questions[1]}\n

${ answersForNextPost[1]} \n
\n`).then(() => next())
}

let thirdPost = (ctx, next, ) => {
    ctx.reply(`${ textData.cmdText.feedback.faq.questionNumber } ${ arrayEmojiQuestionNumbers[2] } ${ textData.msgText.faq.aboutDarkDev.events.questions[2] }\n

${ answersForNextPost[2]} \n
\n`).then(() => next())
}

let fourthPost = (ctx, next, ) => {
    ctx.reply(`${ textData.cmdText.feedback.faq.questionNumber} ${arrayEmojiQuestionNumbers[3]} ${textData.msgText.faq.aboutDarkDev.events.questions[3]}\n

${ answersForNextPost[3]} \n
\n`).then(() => next())
}

let fifthPost = (ctx, next, ) => {
    ctx.reply(`${ textData.cmdText.feedback.faq.questionNumber} ${arrayEmojiQuestionNumbers[4]} ${textData.msgText.faq.aboutDarkDev.events.questions[4]}\n

${ answersForNextPost[4]} \n
\n`).then(() => next())
}


// printQuestionsListFunc(textData.msgText.faq.aboutDarkDev.events.questions)
feedbackFaqAboutDarkDevEventsScene.enter((ctx) => {
if (howManyAnswersOnBd - counterAnswers <= postsAfterClickPrintPosts) counterAnswers = counterAnswers + postsAfterClickPrintPosts
    sliceAnswers(counterAnswers)
    sliceQuestions(counterAnswers)
    sliceNumbers(counterAnswers)
    if (firstStart) {
        counterAnswers = 0
        msg = msgFirstType(howManyQuestionsOnBd, howManyAnswersOnBd, postsAfterClickPrintPosts)
    }
    if (!firstStart && (counterAnswers != howManyAnswersOnBd || counterAnswers < howManyAnswersOnBd) && howManyAnswersOnBd - counterAnswers > postsAfterClickPrintPosts) {
        msg = msgSecondType(howManyQuestionsOnBd, howManyAnswersOnBd, counterAnswers, postsAfterClickPrintPosts)
    }
    if (counterAnswers == howManyAnswersOnBd || howManyAnswersOnBd - counterAnswers < postsAfterClickPrintPosts || counterAnswers > howManyAnswersOnBd) {
        msg = msgThirdType(howManyQuestionsOnBd, howManyAnswersOnBd)
    }
    firstStart = false

    if (howManyAnswersOnBd > postsAfterClickPrintPosts && (counterAnswers == howManyAnswersOnBd || counterAnswers < howManyAnswersOnBd)) {
        btnPanel = [`${textData.eB.backBtn}`, `${textData.eB.goMainMenuBtn}`, `${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}`]
        // textData.cmdText.feedback.faq.aboutDarkDev.events
        ctx.reply(`${textData.cmdText.feedback.faq.aboutDarkDev.events}
${msg}`, Markup
            .keyboard([
                [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
                `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
                btnPanel
            ])
            .oneTime()
            .resize()
            .extra())
        if (howManyAnswersOnBd - counterAnswers > postsAfterClickPrintPosts) counterAnswers = counterAnswers + postsAfterClickPrintPosts

    }
    if (howManyAnswersOnBd < postsAfterClickPrintPosts || counterAnswers > howManyAnswersOnBd) {
        btnPanel = [`${textData.eB.backBtn} ${menuText.backBtn}`, `${textData.eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`]
        ctx.reply(`${textData.msgText.faq.msgEnd}`, Markup
            .keyboard([
                [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
                `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
                btnPanel
            ])
            .oneTime()
            .resize()
            .extra()
        )


    }
    })


/**
 * Шаблон для 30 кнопок (максимальное число для красивого размещения на мобилке)
 * регулярку для отлова номера нажатой эмодзи хз как делать
        [ `${textData.eB.fee.faq.questionNumbers.firstQuestion}`, `${textData.eB.fee.faq.questionNumbers.secondQuestion}`, `${textData.eB.fee.faq.questionNumbers.thirdQuestion}`, `${textData.eB.fee.faq.questionNumbers.fourthQuestion}`, `${textData.eB.fee.faq.questionNumbers.fifthQuestion}`, `${textData.eB.fee.faq.questionNumbers.sixthQuestion}`, `${textData.eB.fee.faq.questionNumbers.seventhQuestion}`, `${textData.eB.fee.faq.questionNumbers.eigthQuestion}`, `${textData.eB.fee.faq.questionNumbers.ninthQuestion}`],
        [ `${textData.eB.fee.faq.questionNumbers.tenthQuestion}`, `${textData.eB.fee.faq.questionNumbers.eleventhQuestion}`, `${textData.eB.fee.faq.questionNumbers.twelfthQuestion}`, `${textData.eB.fee.faq.questionNumbers.thirteethQuestion}`, `${textData.eB.fee.faq.questionNumbers.forteethQuestion}`, `${textData.eB.fee.faq.questionNumbers.fifteenthQuestion}`, `${textData.eB.fee.faq.questionNumbers.sixteenthQuestion}`],
        [ `${textData.eB.fee.faq.questionNumbers.seventeenQuestion}`, `${textData.eB.fee.faq.questionNumbers.eighteenQuestion}`, `${textData.eB.fee.faq.questionNumbers.nineteethQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethFirstQuestion}`,`${textData.eB.fee.faq.questionNumbers.tweintiethSecondQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethThirdQuestion}`],
        [ `${textData.eB.fee.faq.questionNumbers.tweintiethFourthQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethFifthQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethSixthQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethSeventhQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethEigthQuestion}`, `${textData.eB.fee.faq.questionNumbers.tweintiethNinthQuestion}`, `${textData.eB.fee.faq.questionNumbers.thirtiethQuestion}`],

 */


feedbackFaqAboutDarkDevEventsScene.hears(`${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`, printAnswerQuestionsList, (ctx) => {
    ctx.reply(`${textData.cmdText.feedback.faq.aboutDarkDev.events}
${msgFirstType(howManyQuestionsOnBd, howManyAnswersOnBd, postsAfterClickPrintPosts)}`, Markup
            .keyboard([
                [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
                `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
                [`${textData.eB.backBtn}`, `${textData.eB.goMainMenuBtn}`, `${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}`]
            ])
            .oneTime()
            .resize()
            .extra())
})


feedbackFaqAboutDarkDevEventsScene.hears(`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`, printQuestionsList, (ctx) => {
    ctx.reply(`${textData.cmdText.feedback.faq.aboutDarkDev.events}
${msgFirstType(howManyQuestionsOnBd, howManyAnswersOnBd, postsAfterClickPrintPosts)}`, Markup
        .keyboard([
            [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
            `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
            [`${textData.eB.backBtn}`, `${textData.eB.goMainMenuBtn}`, `${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}`]
        ])
        .oneTime()
        .resize()
        .extra())
})

// feedbackFaqAboutDarkDevEventsScene.hears()

//  thirdPost, fourthPost, fifthPost, // если больше 1 поста то не влазит в экран верхний из вопросов
feedbackFaqAboutDarkDevEventsScene.hears(`${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}`, firstPost, secondPost, (ctx) => {
    sliceAnswers(counterAnswers)
    sliceQuestions(counterAnswers)
    sliceNumbers(counterAnswers)

    if (!firstStart && (counterAnswers != howManyAnswersOnBd || counterAnswers < howManyAnswersOnBd) && howManyAnswersOnBd - counterAnswers > postsAfterClickPrintPosts) {
        msg = msgSecondType(howManyQuestionsOnBd, howManyAnswersOnBd, counterAnswers, postsAfterClickPrintPosts) 
    }
    if (counterAnswers == howManyAnswersOnBd || howManyAnswersOnBd - counterAnswers < postsAfterClickPrintPosts || counterAnswers > howManyAnswersOnBd) {
        msg = msgThirdType(howManyQuestionsOnBd, howManyAnswersOnB, counterAnswers, postsAfterClickPrintPosts)
    }

    if (howManyAnswersOnBd > postsAfterClickPrintPosts && (counterAnswers == howManyAnswersOnBd || counterAnswers < howManyAnswersOnBd)) {
        btnPanel = [`${textData.eB.backBtn}`, `${textData.eB.goMainMenuBtn}`, `${textData.cmdText.store.printFiveLots} ${textData.eN.extra.two}`]
        ctx.reply(`${textData.cmdText.feedback.faq.aboutDarkDev.events}
        ${msg}`, Markup
        .keyboard([
            [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
            `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
            btnPanel
        ])
        .oneTime()
        .resize()
        .extra())
        if (howManyAnswersOnBd - counterAnswers > postsAfterClickPrintPosts) counterAnswers = counterAnswers + postsAfterClickPrintPosts

    }
    if (howManyAnswersOnBd < postsAfterClickPrintPosts || counterAnswers > howManyAnswersOnBd) {
        btnPanel = [`${textData.eB.backBtn} ${menuText.backBtn}`, `${textData.eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`]
        ctx.reply(`${textData.msgText.faq.msgEnd}`, Markup
            .keyboard([
                [`${textData.eB.fee.faq.questionList} ${textData.cmdText.feedback.faq.questionList}`,
                `${textData.eB.fee.faq.question} ${textData.cmdText.feedback.faq.answerQuestion} ${textData.eB.fee.faq.answer}`],
                btnPanel
            ])
            .oneTime()
            .resize()
            .extra()
        )


    }
})


feedbackFaqAboutDarkDevEventsScene.hears(`${textData.eB.backBtn} ${textData.eB.backBtn}`, enter('feedbackFaqAboutDarkDev'))
feedbackFaqAboutDarkDevEventsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.eB.goMainMenuBtn}`, enter('mainMenu'))
feedbackFaqAboutDarkDevEventsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))




export default feedbackFaqAboutDarkDevEventsScene

