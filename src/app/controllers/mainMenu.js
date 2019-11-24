const Scene = require('telegraf/scenes/base'),
    fs = require('fs')
import cl from 'node-cl-log'

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../utils/exportTextData'

const mainMenuScene = new Scene('mainMenu')

mainMenuScene.enter((ctx) => {

    ctx.reply(
        `${textData.eT.mainMenu} ${textData.cmdText.mainMenu.header}`, Markup.keyboard([
            [`${textData.eB.cat.fm} ${textData.menuText.catalog.header}`],
            [`${textData.eB.fee.header} ${textData.menuText.feedback.header}`],
            [
                `${textData.eB.abo.header} ${textData.menuText.about.header}`,
                `${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.set.header} ${textData.menuText.settings.header}`
            ],
        ])
        .oneTime()
        .resize()
        .extra()
    )
})

mainMenuScene.hears(`${textData.eB.cat.fm} ${textData.menuText.catalog.header}`, enter('catalog'))
mainMenuScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('chooseLang'))
mainMenuScene.hears(`${textData.eB.abo.fm} ${textData.cmdText.about}`, ctx => ctx.reply(textData.cmdText.about.aboutMenu))


// mainMenuScene.hears(`${textData.eB.abo.header} ${textData.menuText.about.header}`, enter('about'))
// mainMenuScene.hears(`${textData.eB.set.header} ${textData.menuText.settings.header}`, enter('settings'))
// mainMenuScene.hears(`${textData.eB.fee.header} ${textData.menuText.feedback.header}`, enter('feedback'))
// mainMenuScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))



export default mainMenuScene