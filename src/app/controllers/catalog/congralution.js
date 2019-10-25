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

const catalogCardCongralutionScene = new Scene('catalogCardCongralution');



catalogCardCongralutionScene.enter(
    (ctx) => {
        ctx.reply(`${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.congratulations}

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
catalogCardCongralutionScene.hears(`${textData.eB.langSet.be} ${textData.menuText.langSet.be}`, enter('catalogCardCongralutionBe'))
catalogCardCongralutionScene.hears(`${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`, enter('catalogCardCongralutionRu'))
catalogCardCongralutionScene.hears(`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`, enter('catalogCardCongralutionEn'))
catalogCardCongralutionScene.hears(`${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`, enter('catalogCardCongralutionPl'))
catalogCardCongralutionScene.hears(`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`, enter('catalogCardCongralutionUk'))

catalogCardCongralutionScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'))
catalogCardCongralutionScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
catalogCardCongralutionScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


export default catalogCardCongralutionScene