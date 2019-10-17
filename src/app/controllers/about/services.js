const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const aboutServicesScene = new Scene('aboutServices');

aboutServicesScene.enter((ctx) => {
    ctx.reply(`${textData.menuText.about.services.header}

${textData.eB.abo.header} ${textData.cmdText.about.services.header}
${textData.eB.abo.services.localizationOf} ${textData.cmdText.about.services.localizationOf}
` , Markup
            .keyboard([
                [`${textData.eB.abo.services.ourProduction.tools.header} ${textData.menuText.about.services.ourProduction.tools.header}`,
                    `${textData.eB.abo.services.ourProduction.workshops.header} ${textData.menuText.about.services.ourProduction.workshops.header}`],
                [`${textData.eB.abo.services.ourProduction.facilitation.header} ${textData.menuText.about.services.ourProduction.facilitation.header}`],
                [`${textData.eB.abo.services.ourProduction.eduMaterials.header} ${textData.menuText.about.services.ourProduction.eduMaterials.header}`],
                [`${textData.eB.abo.services.ourProduction.games.header} ${textData.menuText.about.services.ourProduction.games.header}`],

                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
        })
        
aboutServicesScene.hears(`${textData.eB.abo.services.ourProduction.tools.header} ${textData.menuText.about.services.ourProduction.tools.header}`, enter('aboutServicesTools'))
aboutServicesScene.hears(`${textData.eB.abo.services.ourProduction.games.header} ${textData.menuText.about.services.ourProduction.games.header}`, enter('aboutServicesGames'))
aboutServicesScene.hears(`${textData.eB.abo.services.ourProduction.workshops.header} ${textData.menuText.about.services.ourProduction.workshops.header}`, enter('aboutServicesWorkshops'))
aboutServicesScene.hears(`${textData.eB.abo.services.ourProduction.eduMaterials.header} ${textData.menuText.about.services.ourProduction.eduMaterials.header}`, enter('aboutServicesEduMaterials'))
aboutServicesScene.hears(`${textData.eB.abo.services.ourProduction.facilitation.header} ${textData.menuText.about.services.ourProduction.facilitation.header}`, enter('aboutServicesFacilitation'))


aboutServicesScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutServicesScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutServicesScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutServicesScene