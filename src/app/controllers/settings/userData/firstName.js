import Scene from 'telegraf/scenes/base'
import Extra from 'telegraf/extra'

const { enter, leave } = Stage
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


const settingsUserDataFirstNameScene = new Scene('settingsUserDataFirstName');

settingsUserDataFirstNameScene.enter((ctx) => ctx.reply(`${cmdText.settings.userData.firstName} ${ctx.message.chat.first_name}

${eT.warning} ${msgText.newValue} ${eB.backBtn} ${msgText.or} ${eB.goMainMenuBtn }.`, Markup
    .keyboard([
       [`${eB.backBtn} ${cmdText.backBtn}`,
        `${eB.goMainMenuBtn} ${cmdText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))

settingsUserDataFirstNameScene.hears(`${eB.backBtn} ${cmdText.backBtn}`, enter('settingsUserData'))
settingsUserDataFirstNameScene.hears(`${eB.goMainMenuBtn} ${cmdText.goMainMenuBtn}`, enter('mainMenu'))
settingsUserDataFirstNameScene.on('message', (ctx) => {
    
    ctx.message.chat.first_name = ctx.message.text
    ctx.reply(`
${eT.congralution} ${msgText.congrNewValue}
${cmdText.settings.userData.firstName} ${ctx.message.chat.first_name}

${eT.warning} ${msgText.newValue} ${eB.backBtn} ${msgText.or} ${eB.goMainMenuBtn}.`, Markup
            .keyboard([
                [`${eB.backBtn} ${cmdText.backBtn}`,
                `${eB.goMainMenuBtn} ${cmdText.goMainMenuBtn}`]
            ])
            .oneTime()
            .resize()
            .extra())
})

export default settingsUserDataFirstNameScene
