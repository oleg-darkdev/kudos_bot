/**
 * ToDO:
 * когда заканчиваюься партнеры убирать подпись следующий партнер и пошаманить с панелью кнопак снизу
 */


const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'

const Extra = require('telegraf/extra')
const fs = require('fs')
import textData from '../../../utils/exportTextData'

const nextPartnerCounter = (ctx , next) => {
    ctx.session.partnerCounter = ctx.session.partnerCounter || 0
    ctx.session.partnerCounter++

    ctx.reply(`${textData.cmdText.about.partners.counterText}`).then(() => next())
}
const getPartnerInfo = (ctx  , next) => {
    if (ctx.session.partnerCounter == textData.cmdText.about.partners.text.length) {
        ctx.reply(`Партнеры кончились`).then(() => next())
    } else {
        // console.log(textData.cmdText.about.partners.text.length)
        // console.log(`counter: ${ctx.session.partnerCounter}`)
    
        ctx.replyWithPhoto({ url: `${textData.cmdText.about.partners.text[ctx.session.partnerCounter].logoCompanyPath}` },
            Extra.load({ caption: `${textData.cmdText.about.partners.text[ctx.session.partnerCounter].description}` })
                .markdown()
                .markup((m) =>
                    m.inlineKeyboard([
                        m.urlButton(textData.cmdText.officialSiteBtn, `${textData.cmdText.about.partners.text[ctx.session.partnerCounter].offSiteCompanyLink}`),
                    ])
                )
        ).then(() => next())
    }
}


const backPartnerCounter = (ctx , next) => {
    ctx.session.partnerCounter = ctx.session.partnerCounter || 0
    ctx.session.partnerCounter--

    ctx.reply(`${textData.cmdText.about.partners.counterText}`).then(() => next())
}




const partnersPresentationScene = new Scene('partnersPresentation');

partnersPresentationScene.enter((ctx) => {
    // ${textData.cmdText.about.partners.header}
    // ${textData.eB.backBtn}
    
    ctx.reply(` ${textData.msgText.about.presentationPartners} ${textData.eB.goMainMenuBtn}.` , Markup
            .keyboard([
                [`${textData.eB.presentation.outBtn}`,   
                `${textData.eB.presentation.backBtn}`,
                `${textData.eB.presentation.nextBtn}`,
                         
                `${textData.eB.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


partnersPresentationScene.hears(`${textData.eB.presentation.nextBtn}`, nextPartnerCounter, getPartnerInfo, (ctx) => {
    return ctx.reply(`#darkDev #partners`, Markup
            .keyboard([
                [`${textData.eB.presentation.outBtn}`,
                `${textData.eB.presentation.backBtn}`,
                `${textData.eB.presentation.nextBtn}`,
                `${textData.eB.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})

partnersPresentationScene.hears(`${textData.eB.presentation.backBtn}`, backPartnerCounter, getPartnerInfo, (ctx) => {
    return ctx.reply(`#darkDev #partners`, Markup
            .keyboard([
                [`${textData.eB.presentation.outBtn}`,
                `${textData.eB.presentation.backBtn}`,
                `${textData.eB.presentation.nextBtn}`,
                `${textData.eB.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})

partnersPresentationScene.hears(`${textData.eB.presentation.outBtn}`, enter('about'))
partnersPresentationScene.hears(`${textData.eB.goMainMenuBtn}`, enter('mainMenu'))
// partnersPresentationScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))




export default partnersPresentationScene