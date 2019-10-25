const Scene = require('telegraf/scenes/base'),
    fs = require('fs')
import cl from 'node-cl-log'

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../../utils/exportTextData'
import kudoCardGen from '../../../utils/cardGen'

const catalogCardProudEnScene = new Scene('catalogCardProudEn');



catalogCardProudEnScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.enterTextForKudoCard}`, Markup.keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                    `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
                ]
            ])
            .oneTime()
            .resize()
            .extra()
        )
    }
)

catalogCardProudEnScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogCardProud'))
catalogCardProudEnScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardProudEnScene.on('message', (ctx) => {
    let msgLength = (ctx.message.text.length < 140) ? kudoCardGen.enKudoCardsGen.proudKudoCardGen(ctx.message.text) : ctx.reply(`${textData.msgText.pleaseEnterShortMsg.start} ${ctx.message.text.length}. ${textData.msgText.pleaseEnterShortMsg.end}`)
})

export default catalogCardProudEnScene