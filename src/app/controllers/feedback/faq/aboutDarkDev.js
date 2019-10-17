
/**
 * Разбить вопросы на каттегории, по бирюзовым организациям (собрать реально много вопросов), гибким методолгиям, для чего наши инструменты \ игры, что такое геймификация, фасилитация
 * 
 * Повырывать часть вопросов и ответов из автоматического субтитров отсюда: https://www.youtube.com/watch?v=gUqLv1HwACk и повставлять 
 */
const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import partners from './aboutDarkDev/partners'
import events from './aboutDarkDev/events'
import orders from './aboutDarkDev/orders'


import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import emodji from '../../../locales/emodji'
import messagesText from '../../../locales/messagesText'
import commandsText from '../../../locales/commandsText'
import menuTextLang from '../../../locales/mainMenuText'

const {
    emodjiForText: eT,
    emodjiForButtons: eB,
    emodjiForNumbers: eN
} = emodji;


const { ruMenu: RU_MENU,
    byMenu: BY_MENU,
    enMenu: EN_MENU } = menuTextLang;

const { ruMsgTxt: RU_MESSAGES,
    byMsgTxt: BY_MESSAGES,
    enMsgTxt: EN_MESSAGES } = messagesText;

const { ruCommandsText: RU_COMMANDS,
    byCommandsText: BY_COMMANBDS,
    enCommandsText: EN_COMMANBDS } = commandsText;

let
    menuText = RU_MENU,
    cmdText = RU_COMMANDS,
    msgText = RU_MESSAGES; // default

const feedbackFaqAboutDarkDevScene = new Scene('feedbackFaqAboutDarkDev');

feedbackFaqAboutDarkDevScene.enter((ctx) => ctx.reply(cmdText.feedback.faq.header, Markup
    .keyboard([
        [`${eB.fee.faq.aboutDarkDev.partners} ${menuText.feedback.faq.aboutDarkDev.partners}`,
            `${eB.fee.faq.aboutDarkDev.orders} ${menuText.feedback.faq.aboutDarkDev.orders}`],
        [`${eB.fee.faq.aboutDarkDev.events} ${menuText.feedback.faq.aboutDarkDev.events}`],

        [`${eB.backBtn} ${menuText.backBtn}`, `${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))


// feedbackFaqAboutDarkDevScene.hears(`${eB.fee.faq.aboutDarkDev.partners} ${menuText.feedback.faq.aboutDarkDev.partners}`, enter('feedbackFaqAboutDarkDevPartners'))
//     feedbackFaqAboutDarkDevScene.hears(`${eB.fee.faq.aboutDarkDev.orders} ${menuText.feedback.faq.aboutDarkDev.orders}`, enter('feedbackFaqAboutDarkDevOrders'))
feedbackFaqAboutDarkDevScene.hears(`${eB.fee.faq.aboutDarkDev.events} ${menuText.feedback.faq.aboutDarkDev.events}`, enter('feedbackFaqAboutDarkDevEvents'))

feedbackFaqAboutDarkDevScene.hears(`${eB.backBtn} ${menuText.backBtn}`, enter('feedbackFaq'))
feedbackFaqAboutDarkDevScene.hears(`${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`, enter('mainMenu'))
feedbackFaqAboutDarkDevScene.on('message', (ctx) => ctx.reply(msgText.ifUserSendMsgVicePressBtn))




export default feedbackFaqAboutDarkDevScene

