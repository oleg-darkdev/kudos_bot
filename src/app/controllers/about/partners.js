const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

import partnersPresentation from './partners/partnersPresentation'

const aboutPartnersScene = new Scene('aboutPartners');

aboutPartnersScene.enter((ctx) => {
    ctx.reply(`${textData.menuText.about.partners.header}


${textData.eB.abo.partners.header} ${textData.cmdText.about.partners.header}


` , Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                    `${textData.eB.nextBtn} ${textData.menuText.nextBtn}`],
                [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})

aboutPartnersScene.hears(`${textData.eB.nextBtn} ${textData.menuText.nextBtn}`, enter('partnersPresentation'))
aboutPartnersScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutPartnersScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutPartnersScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutPartnersScene