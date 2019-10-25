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

const catalogCardProudScene = new Scene('catalogCardProud');



catalogCardProudScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.proud}

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
catalogCardProudScene.hears(`${textData.eB.langSet.be} ${textData.menuText.langSet.be}`, enter('catalogCardProudBe'))
catalogCardProudScene.hears(`${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`, enter('catalogCardProudRu'))
catalogCardProudScene.hears(`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`, enter('catalogCardProudEn'))
catalogCardProudScene.hears(`${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`, enter('catalogCardProudPl'))
catalogCardProudScene.hears(`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`, enter('catalogCardProudUk'))

catalogCardProudScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'))
catalogCardProudScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardProudScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


export default catalogCardProudScene