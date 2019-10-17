import Scene from 'telegraf/scenes/base'
import Extra from 'telegraf/extra'

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../utils/exportTextData'

const settingsScene = new Scene('settings');

settingsScene.enter((ctx) => ctx.reply(textData.cmdText.settings.header, Markup
    .keyboard([
        [`${textData.eB.set.userData.header} ${textData.menuText.settings.userData.header}`],
       
        // [`${textData.eB.backBtn} ${textData.menuText.backBtn}`],
        [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`]
    ])
    .oneTime()
    .resize()
    .extra()
))

settingsScene.hears(`${textData.eB.set.userData.header} ${textData.menuText.settings.userData.header}`, enter('settingsUserData'))

// settingsScene.hears(`${textData.eB.set.notificationBot} ${textData.menuText.settings.notificationBot}`, enter('settingsFacts'))
// settingsScene.hears(`${textData.eB.set.language} ${textData.menuText.settings.language}`, enter('settingsFacts'))

// settingsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogStart'))
settingsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
settingsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default settingsScene

// export default [
//     settingsScene,
//     clientsScene, 
//     // factsScene,
//     // projectsScene,
//     // servicesScene,
//     // contactsScene,
//     // ourAdvantagesScene,
//     // teamScene,
//     // partnersScene,
//     // qualityGuaranteeScene,
//     // whoWeAreScene
// ]