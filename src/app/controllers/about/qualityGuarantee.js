const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const aboutQualityGuaranteeScene = new Scene('aboutQualityGuarantee');

aboutQualityGuaranteeScene.enter((ctx) => {
    ctx.reply(`${textData.eB.abo.qualityGuarantee.header} ${textData.menuText.about.qualityGuarantee.header}

${textData.eB.abo.qualityGuarantee.text} ${textData.cmdText.about.qualityGuarantee.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`],
                [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutQualityGuaranteeScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutQualityGuaranteeScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutQualityGuaranteeScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutQualityGuaranteeScene