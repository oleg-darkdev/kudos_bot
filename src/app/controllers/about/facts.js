const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

// import howEventsFacilitationCarriedOut from './facts/howEventsFacilitationCarriedOut'
// import howEventsWorkshopsCarriedOut  from './facts/howEventsWorkshopsCarriedOut '
// import howPrintablePokerCards from './facts/howPrintablePokerCards'
// import howPrintableGames from './facts/howPrintableGames'
// import howPrintableTools from './facts/howPrintableTools'

const aboutFactsScene = new Scene('aboutFacts');

aboutFactsScene.enter((ctx) => {
    ctx.reply(`${textData.menuText.about.facts.header}


${textData.eB.abo.facts.printable.header} ${textData.menuText.about.facts.printable.header}
${textData.eB.abo.facts.printable.printableGames} ${textData.menuText.about.facts.printable.printableGames}: вызов функции howPrintableGames()
${textData.eB.abo.facts.printable.printableTools} ${textData.menuText.about.facts.printable.printableTools}: вызов функции howPrintableTools()
${textData.eB.abo.facts.printable.printablePokerCards} ${textData.menuText.about.facts.printable.printablePokerCards}: вызов функции howPrintablePokerCards()
${textData.eB.abo.facts.events.eventsWorkshops} ${textData.menuText.about.facts.events.eventsWorkshops}: вызов функции howEventsWorkshopsCarriedOut()
${textData.eB.abo.facts.events.eventsFacilitationSession} ${textData.menuText.about.facts.events.eventsFacilitationSession}: вызов функции howEventsFacilitationCarriedOut()


` , Markup
            .keyboard([
                [`${textData.eB.backBtn} ${textData.menuText.backBtn}`,
                `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`],
            ])
            .oneTime()
            .resize()
            .extra())
})


aboutFactsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('about'))
aboutFactsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutFactsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

export default aboutFactsScene