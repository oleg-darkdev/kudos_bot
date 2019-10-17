const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../utils/exportTextData'

const aboutScene = new Scene('about');

aboutScene.enter((ctx) => ctx.reply(textData.cmdText.about.header, Markup
        .keyboard([
            [`${textData.eB.abo.whoWeAre.header} ${textData.menuText.about.whoWeAre.header}`,
            `${textData.eB.abo.contacts.header} ${textData.menuText.about.contacts.header}`],
            [`${textData.eB.abo.services.header} ${textData.menuText.about.services.header}`,
            `${textData.eB.abo.facts.header} ${textData.menuText.about.facts.header}`],
            // [`${textData.eB.abo.ourAdvantages.header} ${textData.menuText.about.ourAdvantages.header}`],
            [`${textData.eB.abo.clients.header} ${textData.menuText.about.clients.header}`,
                `${textData.eB.abo.partners.header} ${textData.menuText.about.partners.header}`],
            [`${textData.eB.abo.team.header} ${textData.menuText.about.team.header}`,
            `${textData.eB.abo.projects.header} ${textData.menuText.about.projects.header}`],
            // [`${textData.eB.abo.qualityGuarantee.header} ${textData.menuText.about.qualityGuarantee.header}`],

        // [`${textData.eB.backBtn} ${textData.menuText.backBtn}`],
        [`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`]
        ])
        .oneTime()
        .resize()
        .extra()
)

)


aboutScene.hears(`${textData.eB.abo.facts.header} ${textData.menuText.about.facts.header}`, enter('aboutFacts'))
aboutScene.hears(`${textData.eB.abo.contacts.header} ${textData.menuText.about.contacts.header}`, enter('aboutContacts'))
aboutScene.hears(`${textData.eB.abo.whoWeAre.header} ${textData.menuText.about.whoWeAre.header}`, enter('aboutWhoWeAre'))
aboutScene.hears(`${textData.eB.abo.services.header} ${textData.menuText.about.services.header}`, enter('aboutServices'))
aboutScene.hears(`${textData.eB.abo.team.header} ${textData.menuText.about.team.header}`, enter('aboutTeam'))
aboutScene.hears(`${textData.eB.abo.partners.header} ${textData.menuText.about.partners.header}`, enter('aboutPartners'))
// Достоинство и качества добавить на кнопку о нас
// aboutScene.hears(`${textData.eB.abo.whoWeAre.ourAdvantages.header} ${textData.menuText.about.whoWeAre.ourAdvantages.header}`, enter('aboutOurAdvantages'))
// aboutScene.hears(`${textData.eB.abo.whoWeAre.qualityGuarantee.header} ${textData.menuText.about.whoWeAre.qualityGuarantee.header}`, enter('aboutQualityGuarantee'))
// aboutScene.hears(`${textData.eB.abo.projects.header} ${textData.menuText.about.projects.header}`, enter('aboutprojects'))
// aboutScene.hears(`${textData.eB.abo.clients.header} ${textData.menuText.about.clients.header}`, enter('aboutClients'))


// aboutScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogStart'))
aboutScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))




export default aboutScene

// export default [
//     aboutScene,
//     clientsScene, 
//     // factsScene,
//     // projectsScene,
//     // servicesScene,
//     // contactsScene,
//     // ourAdvantagesScene,
//     // teamScene,
//     // partnersScene,
//     // qualityGuaranteeScene,
//     // whoWeAreScene
// ]