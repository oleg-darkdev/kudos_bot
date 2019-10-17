const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import emodji from '../../locales/emodji'
import messagesText from '../../locales/messagesText'
import commandsText from '../../locales/commandsText'
import menuText from '../../locales/mainMenuText'


const {
    emodjiForText: eT,
    emodjiForButtons: eB,
    emodjiForNumbers: eN
} = emodji;


const { ruMenu: RU_MENU,
    byMenu: BY_MENU,
    enMenu: EN_MENU } = menuText;

const { ruMsgTxt: RU_MESSAGES,
    byMsgTxt: BY_MESSAGES,
    enMsgTxt: EN_MESSAGES } = messagesText;

const { ruCommandsText: RU_COMMANDS,
    byCommandsText: BY_COMMANBDS,
    enCommandsText: EN_COMMANBDS } = commandsText;

let
    menuButtonsText = RU_MENU,
    commandsTextLanguage = RU_COMMANDS,
    messagesTextLanguage = RU_MESSAGES; // default


const settingsFirstNameScene = new Scene('settingsFirstName');

settingsFirstNameScene.enter((ctx) => {
    let firstNameNow = ctx.message.chat.first_name;

    ctx.reply(`${commandsTextLanguage.settings.userData.firstName} ${firstNameNow}

${commandsTextLanguage.settings.userData.newValue}` , Markup
            .keyboard([
                [`${eB.backBtn} ${commandsTextLanguage.backBtn}`],
                [`${eB.goMainMenuBtn} ${commandsTextLanguage.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


settingsFirstNameScene.hears(`${eB.backBtn} ${commandsTextLanguage.backBtn}`, enter('settings'))
settingsFirstNameScene.hears(`${eB.goMainMenuBtn} ${commandsTextLanguage.goMainMenuBtn}`, enter('mainMenu'))
settingsFirstNameScene.on('message', (ctx) => ctx.reply(messagesTextLanguage.ifUserSendMsgVicePressBtn))

export default settingsFirstNameScene