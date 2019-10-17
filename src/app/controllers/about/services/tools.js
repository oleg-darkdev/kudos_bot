const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from './././utils/exportTextData' 

const aboutServicesToolsScene = new Scene('aboutServicesTools');

aboutServicesToolsScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.services.ourProduction.tools.header}
${ textData.cmdText.about.services.ourProduction.tools.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutServicesToolsScene.hears(`${eB.backBtn} ${textData.menuText.textData.backBtn}`, enter('aboutServices'))
aboutServicesToolsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesToolsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutServicesToolsScene