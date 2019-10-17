
/**
 * Разбить вопросы на каттегории, по бирюзовым организациям (собрать реально много вопросов), гибким методолгиям, для чего наши инструменты \ игры, что такое геймификация, фасилитация
 * 
 * Повырывать часть вопросов и ответов из автоматического субтитров отсюда: https://www.youtube.com/watch?v=gUqLv1HwACk и повставлять 
 */
const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import emodji from '../../locales/emodji'
import messagesText from '../../locales/messagesText'
import commandsText from '../../locales/commandsText'
import menuTextLang from '../../locales/mainMenuText'

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

const feedbackFaqScene = new Scene('feedbackFaq');

feedbackFaqScene.enter((ctx) => ctx.reply(cmdText.feedback.faq.header, Markup
    .keyboard([
        [`${eB.fee.faq.turqoiseOrgs} ${menuText.feedback.faq.turqoiseOrgs}`, `${eB.fee.faq.aboutDarkDev.header} ${menuText.feedback.faq.aboutDarkDev.header}`],
        [`${eB.fee.faq.gamification} ${menuText.feedback.faq.gamification}`, `${eB.fee.faq.wargaming} ${menuText.feedback.faq.wargaming}`],

        [`${eB.backBtn} ${menuText.backBtn}`, `${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))

feedbackFaqScene.hears(`${eB.fee.faq.aboutDarkDev.header} ${menuText.feedback.faq.aboutDarkDev.header}`, enter('feedbackFaqAboutDarkDev'))
// feedbackFaqScene.hears(`${eB.fee.faq.gamification} ${cmdText.feedback.faq.gamification}`, enter('feedbackFaqAboutDarkDev'))
// feedbackFaqScene.hears(`${eB.fee.faq.wargaming} ${cmdText.feedback.faq.wargaming}`, enter('feedbackFaqAboutDarkDev'))
// feedbackFaqScene.hears(`${eB.fee.faq.turqoiseOrgs} ${cmdText.feedback.faq.turqoiseOrgs}`, enter('catalogStart'))
feedbackFaqScene.hears(`${eB.backBtn} ${menuText.backBtn}`, enter('feedback'))
feedbackFaqScene.hears(`${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`, enter('mainMenu'))
feedbackFaqScene.on('message', (ctx) => ctx.reply(msgText.ifUserSendMsgVicePressBtn))




export default feedbackFaqScene

