// const cl = require('node-cl-log'),
//   Telegraf = require('telegraf'),
//   Composer = require('telegraf/composer'),
//   session = require('telegraf/session'),
//   Stage = require('telegraf/stage'),
//   Markup = require('telegraf/markup'),
//   Scene = require('telegraf/scenes/base');

import Telegraf, {
  ContextMessageUpdate
} from 'telegraf'
import cl from 'node-cl-log'
import Composer from 'telegraf/composer'
import session from 'telegraf/session'
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import Scene from 'telegraf/scenes/base'

const {
  enter,
  leave
} = Stage


import logger from './utils/logger'
import textData from './utils/exportTextData'

// import aboutScenes from './utils/aboutScenes/exportAboutScenes'
// import feedbackScenes from './utils/feedbackScenes/exportFeedbackScenes'
import settingsScenes from './utils/settingsScenes/exportSettingsScenes'
import catalogScenes from './utils/catalogScenes/exportCatalogScenes'

const mainMenuScene = new Scene('mainMenu')

mainMenuScene.enter((ctx) => {
  logger(ctx)

  ctx.reply(
    `${textData.eT.mainMenu} ${textData.cmdText.mainMenu.header}`, Markup.keyboard([
      [`${textData.eB.cat.fm} ${textData.menuText.catalog.header}`],
      [`${textData.eB.fee.header} ${textData.menuText.feedback.header}`],
      [`${textData.eB.abo.header} ${textData.menuText.about.header}`, `${textData.eB.set.header} ${textData.menuText.settings.header}`],
    ])
    .oneTime()
    .resize()
    .extra()
  )
})

let stageScenesArray = []
stageScenesArray = stageScenesArray.concat(settingsScenes, catalogScenes) // aboutScenes, feedbackScenes,
// stageScenesArray.concat(catalogScenes, ) //
stageScenesArray.push(mainMenuScene)

const stage = new Stage(stageScenesArray)

mainMenuScene.hears(`${textData.eB.cat.fm} ${textData.menuText.catalog.header}`, enter('catalog'))
// mainMenuScene.hears(`${textData.eB.abo.header} ${textData.menuText.about.header}`, enter('about'))
// mainMenuScene.hears(`${textData.eB.set.header} ${textData.menuText.settings.header}`, enter('settings'))
// mainMenuScene.hears(`${textData.eB.fee.header} ${textData.menuText.feedback.header}`, enter('feedback'))
// mainMenuScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


const botToken = process.env.tokenCudoBot
const bot = new Telegraf(botToken);
bot.use(session())
bot.use(stage.middleware())

bot.command('start', enter('mainMenu'))

bot.command('test', (ctx) => {
  // ctx.reply()
  cl.log('nabled');

})

bot.launch()