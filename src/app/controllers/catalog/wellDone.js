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

const catalogCardWellDoneScene = new Scene('catalogCardWellDone');



catalogCardWellDoneScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.wellDone}

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
catalogCardWellDoneScene.hears(`${textData.eB.langSet.be} ${textData.menuText.langSet.be}`, enter('catalogCardWellDoneBe'))
catalogCardWellDoneScene.hears(`${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`, enter('catalogCardWellDoneRu'))
catalogCardWellDoneScene.hears(`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`, enter('catalogCardWellDoneEn'))
catalogCardWellDoneScene.hears(`${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`, enter('catalogCardWellDonePl'))
catalogCardWellDoneScene.hears(`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`, enter('catalogCardWellDoneUk'))

catalogCardWellDoneScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'))
catalogCardWellDoneScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardWellDoneScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


export default catalogCardWellDoneScene