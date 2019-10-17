const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const aboutWhoWeAreScene = new Scene('aboutWhoWeAre');

aboutWhoWeAreScene.enter((ctx) => {
    ctx.reply(`
${menuButtonsText.about.whoWeAre.header}
${menuButtonsText.about.whoWeAre.text}

${menuButtonsText.about.whoWeAre.ourAdvantages.header}
${menuButtonsText.about.whoWeAre.ourAdvantages.text}

${menuButtonsText.about.whoWeAre.qualityGuarantee.header}
${menuButtonsText.about.whoWeAre.qualityGuarantee.text}
    ` , Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`]
            ])
            .oneTime()
            .resize()
            .extra())
})

    


// aboutWhoWeAreScene.hears(`${textData.eB.abo.clients.header} ${menuButtonsText.about.clients.header}`, enter('aboutWhoWeAre'))

aboutWhoWeAreScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutWhoWeAreScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutWhoWeAreScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutWhoWeAreScene