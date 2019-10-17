const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const aboutOurAdvantagesScene = new Scene('aboutOurAdvantages');

aboutOurAdvantagesScene.enter((ctx) => {
    ctx.reply(`
${textData.eB.abo.ourAdvantages.header} ${textData.menuText.about.ourAdvantages.header}

${textData.eB.abo.ourAdvantages.text} ${textData.cmdText.about.ourAdvantages.text}`, Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutOurAdvantagesScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutOurAdvantagesScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutOurAdvantagesScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutOurAdvantagesScene