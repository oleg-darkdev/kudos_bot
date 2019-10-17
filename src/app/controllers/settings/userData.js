const Scene = require('telegraf/scenes/base')

const {
    enter,
    leave
} = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const settingsUserDataScene = new Scene('settingsUserData');

settingsUserDataScene.enter((ctx) => ctx.reply(commandsTextLanguage.settings.header, Markup
    .keyboard([
        [`${textData.eB.set.userData.firstName} ${textData.menuText.settings.userData.firstName}`,
            `${textData.eB.set.userData.lastName} ${textData.menuText.settings.userData.lastName}`
        ],
        [`${textData.eB.set.userData.email} ${textData.menuText.settings.userData.email}`],

        [`${textData.eB.backBtn} ${textData.commandsTextLanguage.backBtn}`,
            `${textData.eB.goMainMenuBtn} ${textData.commandsTextLanguage.goMainMenuBtn}`
        ]
    ])
    .oneTime()
    .resize()
    .extra()
))

// settingsUserDataScene.hears(`${textData.eB.set.userData.firstName} ${textData.menuText.settings.userData.firstName}`, enter('settingsUserDataFirstName'))
// settingsUserDataScene.hears(`${textData.eB.set.userData.lastName} ${textData.menuText.settings.userData.lastName}`, enter('settingsFacts'))
// settingsUserDataScene.hears(`${textData.eB.set.userData.email} ${textData.menuText.settings.userData.email}`, enter('settingsFacts'))
// settingsUserDataScene.hears(`${textData.eB.set.userData.notify} ${textData.menuText.settings.userData.notify}`, enter('settingsFacts'))

settingsUserDataScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('settings'))
settingsUserDataScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
settingsUserDataScene.on('message', (ctx) => ctx.reply(messagesTextLanguage.ifUserSendMsgVicePressBtn))

export default settingsUserDataScene