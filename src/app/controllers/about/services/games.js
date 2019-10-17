const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from './././utils/exportTextData' 

const aboutServicesGamesScene = new Scene('aboutServicesGames');

aboutServicesGamesScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.services.ourProduction.games.header}
${ textData.cmdText.about.services.ourProduction.games.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                    `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutServicesGamesScene.hears(`${eB.backBtn} ${textData.menuText.backBtn}`, enter('aboutServices'))
aboutServicesGamesScene.hears(`${eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesGamesScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutServicesGamesScene