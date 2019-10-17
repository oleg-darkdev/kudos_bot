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

const feedbackNeedPeopleScene = new Scene('feedbackNeedPeople');

feedbackNeedPeopleScene.enter((ctx) => ctx.reply(cmdText.feedback.needPeople.header, Markup
    .keyboard([
        [`${eB.fee.needPeople.order.header} ${menuText.feedback.needPeople.order.header}`,
            `${eB.fee.needPeople.talk.header} ${menuText.feedback.needPeople.talk.header}`],
        [`${eB.fee.needPeople.work.header} ${menuText.feedback.needPeople.work.header}`,
            `${eB.fee.needPeople.events.header} ${menuText.feedback.needPeople.events.header}`],

        [`${eB.backBtn} ${menuText.backBtn}`, `${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))

// feedbackNeedPeopleScene.hears(`${eB.fee.needPeople.order.header} ${menuText.feedback.needPeople.order.header}`, enter('feedbackNeedPeopleOrderScene'))
// feedbackNeedPeopleScene.hears(`${eB.fee.needPeople.talk.header} ${menuText.feedback.needPeople.talk.header}`, enter('feedbackNeedPeopleTalkScene'))
// feedbackNeedPeopleScene.hears(`${eB.fee.needPeople.work.header} ${menuText.feedback.needPeople.work.header}`, enter('feedbackNeedPeopleWorkScene'))
// feedbackNeedPeopleScene.hears(`${eB.fee.needPeople.events.header} ${menuText.feedback.needPeople.events.header}`, enter('feedbackNeedPeopleEventsScene'))


feedbackNeedPeopleScene.hears(`${eB.backBtn} ${menuText.backBtn}`, enter('feedback'))
feedbackNeedPeopleScene.hears(`${eB.goMainMenuBtn} ${menuText.goMainMenuBtn}`, enter('mainMenu'))
feedbackNeedPeopleScene.on('message', (ctx) => ctx.reply(msgText.ifUserSendMsgVicePressBtn))




export default feedbackNeedPeopleScene

