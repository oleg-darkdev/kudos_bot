const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'


const aboutContactsScene = new Scene('aboutContacts');

aboutContactsScene.enter((ctx) => {
    ctx.reply(`${textData.cmdText.about.contacts.header}

${textData.eB.abo.contacts.header} ${textData.menuText.about.contacts.header}
${textData.eB.abo.contacts.officiallSite} ${textData.menuText.about.contacts.officiallSite}: ${textData.menuText.about.contacts.officiallSiteLink}
${textData.eB.abo.contacts.communityGroup} ${textData.menuText.about.contacts.communityGroup}: ${textData.menuText.about.contacts.communityGroupLink} 
${textData.eB.abo.contacts.supportBot} ${textData.menuText.about.contacts.supportBot}: ${textData.menuText.about.contacts.supportBotLink}
${textData.eB.abo.contacts.founder} ${textData.menuText.about.contacts.founder}: ${textData.menuText.about.contacts.founderLink}
` , Markup
.keyboard([
    [`${textData.eB.backBtn} ${textData.cmdText.backBtn}`],
    [`${textData.eB.goMainMenuBtn} ${textData.cmdText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutContactsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutContactsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutContactsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutContactsScene