const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../../utils/exportTextData' 

const aboutServicesWorkshopsScene = new Scene('aboutServicesWorkshops');

aboutServicesWorkshopsScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.services.ourProduction.workshops.header}
${ textData.cmdText.about.services.ourProduction.workshops.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`],
                [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutServicesWorkshopsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('aboutServices'))
aboutServicesWorkshopsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesWorkshopsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutServicesWorkshopsScene