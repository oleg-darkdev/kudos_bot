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

function createKudoCard(ctx, language) {
    kudoCardGen.proudKudoCardGen(ctx.message.text, language)
}

const catalogCardProudUkScene = new Scene('catalogCardProudUk');
catalogCardProudUkScene.enter(
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

catalogCardProudUkScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogCardProud'))
catalogCardProudUkScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))

catalogCardProudUkScene.on('message', (ctx) => {
    let userIsClient = ctx.favoriteUsers.client;

    if (ctx.message.text.length > 140) ctx.reply(`${textData.msgText.pleaseEnterShortMsg.start} ${ctx.message.text.length}. ${textData.msgText.pleaseEnterShortMsg.end}`)
    else if (userIsClient == true) {
        createKudoCard(ctx, 'UK')
        ctx.scene.enter('catalogsendPdfOrImg')
    } else {
        createKudoCard(ctx, 'UK')
        ctx.scene.enter('catalogsendPdfOrImgContributer')
    }
})

export default catalogCardProudUkScene