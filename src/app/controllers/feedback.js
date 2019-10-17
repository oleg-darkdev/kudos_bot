const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../utils/exportTextData'


const feedbackScene = new Scene('feedback');

feedbackScene.enter((ctx) => ctx.reply(textData.cmdText.feedback.header, Markup
    .keyboard([
        [`${textData.eB.fee.faq.header} ${textData.menuText.feedback.faq.header}`,
            `${textData.eB.fee.needPeople.header} ${textData.menuText.feedback.needPeople.header}`],
        [`${textData.eB.fee.rate.header} ${textData.menuText.feedback.rate.header}`],

        // [`${textData.eB.backBtn} ${textData.cmdText.backBtn}`],
        [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))

/* 
    Вместо смайлов использовать сердечки.
    💔💞💙

    Когда оставляеться отзыв - спросить, ответ присылать на емейл или на аккаунт в телеграмм. 
*/

feedbackScene.hears(`${textData.eB.fee.faq.header} ${textData.menuText.feedback.faq.header}`, enter('feedbackFaq'))
feedbackScene.hears(`${textData.eB.fee.needPeople.header} ${textData.menuText.feedback.needPeople.header}`, enter('feedbackNeedPeople'))
// feedbackScene.hears(`${textData.eB.fee.rate.header} ${textData.menuText.feedback.rate.header}`, enter('feedbackrate'))

// feedbackScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogStart'))
feedbackScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
feedbackScene.on('message', (ctx) => ctx.reply(textData.textData.msgText.ifUserSendMsgVicePressBtn))




export default feedbackScene

