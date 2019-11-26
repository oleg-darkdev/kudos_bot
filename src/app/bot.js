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




let idClient = 18238 // получаем через телеграмм апи
// let clientProfileData = requestFunc(userSqlRequests.getSettingsForProfile(idClient))
/*
if (clientProfileData.length != 0) {

// в глобальный стор присвоить значения
// clientProfileData[0].firstName,
// clientProfileData[0].secondName,
// clientProfileData[0].id,
// clientProfileData[0].valute,
// clientProfileData[0].phoneNumber,
// clientProfileData[0].country,
// clientProfileData[0].town,
// clientProfileData[0].readInstruction,
// clientProfileData[0].email,
// clientProfileData[0].orders,
// clientProfileData[0].tickets

// let lang = clientProfileData[0].language;
} else {
// создаем новую запись о новом клиенте
// парсим данные из телеги
let firstName = "",
    secondName = "",
    middleName = "",
    language = "",
    phoneNumber= "",
    id = "",
    email = "",
    country = "",
    town = "",
    tickets = "0",
    orders = "0",
    readInstruction = false,
    dateFirstMessage = "",
    telegrammInfo= "";

let valute = language,

// setData('users',
//     ['firstName', 'secondName', 'middleName', 'language', 'valute', 'phoneNumber', 'id', 'email', 'country', 'town', 'orders', 'tickets', 'readInstruction', 'dateFirstMessage', 'telegrammInfo' ],
//     `${firstName}, ${secondName}, ${middleName}, ${language}, ${phoneNumber}, ${id}, ${email}, ${country}, ${town}, ${orders}, ${tickets}, ${readInstruction}, ${dateFirstMessage}, ${telegrammInfo}`
// )

// записываем в стор выбранный язык
// ..... = language
// lang = language;

// let languageMode = validateLanguage(language);
// menuText = languageMode.menuText,
// cmdText = languageMode.cmdText,
// msgText = languageMode.msgText;
}
*/

const whoIsWho = (ctx, next) => {
  /*
    При подключении БД
  */
  // let clientProfileData = requestFunc(userSqlRequests.getSettingsForProfile(idClient))
  // if (clientProfileData.length != 0) {

  // в глобальный стор присвоить значения
  // clientProfileData[0].firstName,
  // clientProfileData[0].secondName,
  // clientProfileData[0].id,
  // clientProfileData[0].phoneNumber,

  // let lang = clientProfileData[0].language;
  // } else {
  // создаем новую запись о новом клиенте
  // парсим данные из телеги
  // let firstName = "",
  //     secondName = "",
  // language = "",
  //     phoneNumber= "",
  //     id = "",
  //     dateFirstMessage = "",
  //     telegrammInfo= "";

  // let valute = language,

  // setData('users',
  //     ['firstName', 'secondName', 'middleName', 'language', 'valute', 'phoneNumber', 'id', 'email', 'country', 'town', 'orders', 'tickets', 'readInstruction', 'dateFirstMessage', 'telegrammInfo' ],
  //     `${firstName}, ${secondName}, ${middleName}, ${language}, ${phoneNumber}, ${id}, ${email}, ${country}, ${town}, ${orders}, ${tickets}, ${readInstruction}, ${dateFirstMessage}, ${telegrammInfo}`
  // )

  bot.context.clientProfileData.firstName = ctx.message.from.first_name;
  bot.context.clientProfileData.id = ctx.message.from.id;
  bot.context.clientProfileData.secondName = ctx.message.from.username;
  bot.context.clientProfileData.languageTelegramClient = ctx.message.from.language_code;
  bot.context.clientProfileData.id = ctx.message.from.id;

  let idUserFromSendMsg = bot.context.clientProfileData.id,
    olegId = bot.context.favoriteUsers.oleg,
    andreyId = bot.context.favoriteUsers.andrey,
    volyaId = bot.context.favoriteUsers.volya,
    tarasId = bot.context.favoriteUsers.taras;

  switch (idUserFromSendMsg) {
    case olegId:
      ctx.reply(`${textData.eT.langSet.hiFavoriteUser} ${textData.cmdText.langSet.hiFavoriteUser} Любы цёска, рады цябе бачыць, заходзь часцей і не забывай выяўляць словы падзякi!`).then(() => next());
      break;
    case andreyId:
      ctx.reply(`${textData.eT.langSet.hiFavoriteUser} ${textData.cmdText.langSet.hiFavoriteUser} Йо братка. Рады цябе бачыць, дзякуй табе за ўсе старанні і хваляванні!`).then(() => next());
      break;
    case volyaId:
      ctx.reply(`${textData.eT.langSet.hiFavoriteUser} ${textData.cmdText.langSet.hiFavoriteUser} воля, будзе вольнай! Рады цябе бачыць, перадаю прывітанне ад усіх ботаў!`).then(() => next());
      break;
    case tarasId:
      ctx.reply(`${textData.eT.langSet.hiFavoriteUser} ${textData.cmdText.langSet.hiFavoriteUser} любы сэрдцу машыны тарасiк, рады цябе бачыць, усяго табе добрага!`).then(() => next());
      break;
    default:
      bot.context.favoriteUsers.client = !bot.context.favoriteUsers.client
      ctx.reply(`если это никто из наших - отсылаем изображение с логотипом, именем бота и т.д.`).then(() => next());
  }

};



const chooseLangScene = new Scene('chooseLang')

chooseLangScene.enter((ctx) => {
  logger(ctx)


  ctx.reply(
    `${textData.eT.langSet.header} ${textData.menuText.langSet.header}`, Markup.keyboard([
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

bot.context.languages = {
  en: 'en',
  be: 'be',
  uk: 'uk',
  ru: 'ru',
  pl: 'pl'
}

bot.context.favoriteUsers = {
  andrey: 688871424,
  volya: 208979625,
  taras: 203629630,
  oleg: 238037743,
  client: false
}

bot.context.clientProfileData = {
  firstName: '',
  secondName: '',
  phoneNumber: '',
  languageTelegramClient: '',
  id: ''
}

bot.command('start', whoIsWho, (ctx) => {
  ctx.scene.enter('chooseLang')
})

bot.command('test', (ctx) => {
  // ctx.reply()
  cl.log('nabled');

})

bot.command('test', enter('catalogCardProud'))

bot.launch()