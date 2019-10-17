const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from './././utils/exportTextData' 

const aboutServicesEduMaterialsScene = new Scene('aboutServicesEduMaterials');

aboutServicesEduMaterialsScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.services.ourProduction.eduMaterials.header}
${ textData.cmdText.about.services.ourProduction.eduMaterials.text }` , Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutServicesEduMaterialsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('aboutServices'))
aboutServicesEduMaterialsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesEduMaterialsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutServicesEduMaterialsScene