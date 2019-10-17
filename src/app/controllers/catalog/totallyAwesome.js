const Scene = require('telegraf/scenes/base'),
    fs = require('fs')

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const catalogCardTotallyAwesomeScene = new Scene('catalogCardTotallyAwesome');



catalogCardTotallyAwesomeScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.totallyAwesome}

${textData.cmdText.catalog.cardDescriptionEnd}`, Markup.keyboard([
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

// catalogCardTotallyAwesomeScene.hears(`${textData.eB.cat.agile.consumables.paper} ${textData.menuText.catalog.agile.consumables.paper}`, enter('catalogAgileConsumPaper'))

catalogCardTotallyAwesomeScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardTotallyAwesomeScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default catalogCardTotallyAwesomeScene