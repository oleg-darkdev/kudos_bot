const Scene = require('telegraf/scenes/base'),
    fs = require('fs')
import cl from 'node-cl-log'

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'
import kudoCardGen from '../../utils/cardGen'

const catalogCardTotallyAwesomeScene = new Scene('catalogCardTotallyAwesome');



catalogCardTotallyAwesomeScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.totallyAwesome}

${textData.cmdText.catalog.choseYourLanguage}`, Markup.keyboard([
                [
                    `${textData.eB.langSet.be} ${textData.menuText.langSet.be}`,
                    `${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`
                ],
                [`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`,
                    `${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`
                ],
                [`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`],
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
catalogCardTotallyAwesomeScene.hears(`${textData.eB.langSet.be} ${textData.menuText.langSet.be}`, enter('catalogCardTotallyAwesomeBe'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`, enter('catalogCardTotallyAwesomeRu'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`, enter('catalogCardTotallyAwesomeEn'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`, enter('catalogCardTotallyAwesomePl'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`, enter('catalogCardTotallyAwesomeUk'))

catalogCardTotallyAwesomeScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'))
catalogCardTotallyAwesomeScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardTotallyAwesomeScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


export default catalogCardTotallyAwesomeScene