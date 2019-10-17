const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from './././utils/exportTextData' 

const aboutServicesFacilitationScene = new Scene('aboutServicesFacilitation');

aboutServicesFacilitationScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.services.ourProduction.facilitation.header}
${ textData.cmdText.about.services.ourProduction.facilitation.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                    `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutServicesFacilitationScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('aboutServices'))
aboutServicesFacilitationScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesFacilitationScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutServicesFacilitationScene