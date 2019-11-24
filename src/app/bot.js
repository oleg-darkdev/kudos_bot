// const cl = require('node-cl-log'),
//   Telegraf = require('telegraf'),
//   Composer = require('telegraf/composer'),
//   session = require('telegraf/session'),
//   Stage = require('telegraf/stage'),
//   Markup = require('telegraf/markup'),
//   Scene = require('telegraf/scenes/base');
require('dotenv').config();

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
import mainMenuScene from './controllers/mainMenu'

// import aboutScenes from './utils/aboutScenes/exportAboutScenes'
// import feedbackScenes from './utils/feedbackScenes/exportFeedbackScenes'
import settingsScenes from './utils/settingsScenes/exportSettingsScenes'
import catalogScenes from './utils/catalogScenes/exportCatalogScenes'



const chooseEnLang = (ctx, next) => {
  textData.setLang(bot.context.languages.en)
  ctx.reply(`${textData.eB.langSet.en} ${textData.cmdText.langSet.en}`).then(() => next());
};
const chooseBeLang = (ctx, next) => {
  textData.setLang(bot.context.languages.be)
  ctx.reply(`${textData.eB.langSet.be} ${textData.cmdText.langSet.be}`).then(() => next());
};
const chooseRuLang = (ctx, next) => {
  textData.setLang(bot.context.languages.ru)
  ctx.reply(`${textData.eB.langSet.ru} ${textData.cmdText.langSet.ru}`).then(() => next());
};
const chooseUkLang = (ctx, next) => {
  textData.setLang(bot.context.languages.uk)
  ctx.reply(`${textData.eB.langSet.uk} ${textData.cmdText.langSet.uk}`).then(() => next());
};
const choosePlLang = (ctx, next) => {
  textData.setLang(bot.context.languages.pl)
  ctx.reply(`${textData.eB.langSet.pl} ${textData.cmdText.langSet.pl}`).then(() => next());
};




const chooseLangScene = new Scene('chooseLang')

chooseLangScene.enter((ctx) => {
  logger(ctx)


  ctx.reply(
    `${textData.menuText.langSet.header}`, Markup.keyboard([ // ${textData.eT.langSet.header}
      [
        `${textData.eB.langSet.en} ${textData.menuText.langSet.en}`,
        `${textData.eB.langSet.be} ${textData.menuText.langSet.be}`,
      ],
      [
        `${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`,
        `${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`
      ],
      [
        `${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`,
      ]
    ])
    .oneTime()
    .resize()
    .extra()
  )
})

let stageScenesArray = []
stageScenesArray = stageScenesArray.concat(settingsScenes, catalogScenes, mainMenuScene) // aboutScenes, feedbackScenes,
stageScenesArray.push(chooseLangScene)

const stage = new Stage(stageScenesArray)

chooseLangScene.hears(`${textData.eB.langSet.en} ${textData.menuText.langSet.en}`, chooseEnLang, (ctx) => {
  ctx.scene.enter('mainMenu')
})
chooseLangScene.hears(`${textData.eB.langSet.be} ${textData.menuText.langSet.be}`, chooseBeLang, (ctx) => {
  ctx.scene.enter('mainMenu')
})
chooseLangScene.hears(`${textData.eB.langSet.ru} ${textData.menuText.langSet.ru}`, chooseRuLang, (ctx) => {
  ctx.scene.enter('mainMenu')
})
chooseLangScene.hears(`${textData.eB.langSet.uk} ${textData.menuText.langSet.uk}`, chooseUkLang, (ctx) => {
  ctx.scene.enter('mainMenu')
})
chooseLangScene.hears(`${textData.eB.langSet.pl} ${textData.menuText.langSet.pl}`, choosePlLang, (ctx) => {
  ctx.scene.enter('mainMenu')
})

// chooseLangScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))


const botToken = process.env.tokenCudoBot
const bot = new Telegraf(botToken);
bot.use(session())
bot.use(stage.middleware())
// bot.context.defaultlang = 'ru'
bot.context.languages = {
  en: 'en',
  be: 'be',
  uk: 'uk',
  ru: 'ru',
  pl: 'pl'
}

// bot.context.languages.be = 'be'
// bot.context.languages.uk = 'uk'
// bot.context.languages.ru = 'ru'
// bot.context.languages.pl = 'pl'

bot.command('start', enter('chooseLang'))

bot.command('test', (ctx) => {
  // ctx.reply()
  cl.log('nabled');

})

// bot.command('test', enter('catalogCardTotallyAwesome'))

bot.launch()