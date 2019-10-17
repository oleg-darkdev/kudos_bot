/* 
    ToDo;
        *  сделать парсинг нескольких индексов из Бд по одному лоту
        *  Исходя за запроса в бд формируется языковые настроки из колонки профилей - язык  и добавить
        * в каждый модуль меню

*/const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import emodji from '../locales/emodji'
import messagesText from '../locales/messagesText'
import commandsText from '../locales/commandsText'
import menuText from '../locales/mainMenuText'


const {
    emodjiForText: eT,
    emodjiForButtons: eB,
    emodjiForNumbers: eN
} = emodji;


const { ruMenu: RU_MENU,
    byMenu: BY_MENU,
    enMenu: EN_MENU } = menuText;

const { ruMsgTxt: RU_MESSAGES,
    byMsgTxt: BY_MESSAGES,
    enMsgTxt: EN_MESSAGES } = messagesText;

const { ruCommandsText: RU_COMMANDS,
    byCommandsText: BY_COMMANBDS,
    enCommandsText: EN_COMMANBDS } = commandsText;

let
    menuButtonsTextLanguageMode = RU_MENU,
    commandsTextLanguage = RU_COMMANDS,
    messagesTextLanguage = RU_MESSAGES; // default


const mainMenuScene = new Scene('mainMenu')
mainMenuScene.enter((ctx) => ctx.reply(
    'Main menu', Markup
        .keyboard([[`${eB.cat.fm} ${menuButtonsTextLanguageMode.catalog.header}`, `${eB.abo.fm} ${menuButtonsTextLanguageMode.about}`],
            [`${eB.abo.fm} ${menuButtonsTextLanguageMode.work}`, `${eB.abo.fm} ${menuButtonsTextLanguageMode.contacts}`],
            [`${eB.abo.fm} ${menuButtonsTextLanguageMode.store}`, `${eB.abo.fm} ${menuButtonsTextLanguageMode.settings}`],
            [`${eB.abo.fm} ${menuButtonsTextLanguageMode.support}`, `${eB.abo.fm} ${menuButtonsTextLanguageMode.events}`]])
      .oneTime()
      .resize()
      .extra()
  )

)
mainMenuScene.hears(`${eB.cat.fm} ${commandsTextLanguage.catalog.header}`, enter('catalogStart'))
mainMenuScene.hears(`${eB.abo.fm} ${commandsTextLanguage.about}`, ctx => ctx.reply(commandsTextLanguage.about.aboutMenu))





export default mainMenuScene