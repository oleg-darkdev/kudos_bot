const messagesText = require('../locales/messagesText')
const commandsText = require('../locales/commandsText')
const menuTextLang = require('../locales/mainMenuText')
const emoji = require('../locales/emodji')
// const requestFunc = require('./sqliteConnectors/requestFunc')
// const setData = require('./sqliteConnectors/setData')
// const userSqlRequests = require('./sqliteConnectors/users/sqlRequests')
// const validateLanguage = require( './validateLanguage'


const {
    emodjiForText: eT,
    emodjiForButtons: eB,
    emodjiForNumbers: eN
} = emoji;


let links = {
    dozaCommandChat: '-1001263977856',
    agileGamesCommunityChat: '-1001263977856',
    darkDevBrandAllChat: '-1001263977856'
}

let allLangs = {
    en: 'en-gb',
    be: 'be',
    pl: 'pl',
    uk: 'uk',
    ru: 'ru'
}


let menuText = "",
    cmdText = "",
    msgText = "",
    lang = ""


// записываем в стор выбранный язык
// ..... = language
// lang = language;

// let languageMode = validateLanguage(language);
// menuText = languageMode.menuText,
// cmdText = languageMode.cmdText,
// msgText = languageMode.msgText;



// удалить этот блок после создания проверки в начале общения
const {
    ruMenu: RU_MENU,
    byMenu: BY_MENU,
    enMenu: EN_MENU,
    // plMenu: PL_MENU,
    // ukMenu: uk_MENU
} = menuTextLang;

const {
    ruMsgTxt: RU_MESSAGES,
    byMsgTxt: BY_MESSAGES,
    enMsgTxt: EN_MESSAGES,
    // ukMsgTxt: UK_MESSAGES,
    // plMsgTxt: pl_MESSAGES,
} = messagesText;

const {
    ruCommandsText: RU_COMMANDS,
    byCommandsText: BY_COMMANBDS,
    enCommandsText: EN_COMMANBDS,
    // ukCommandsText: UK_COMMANBDS,
    // plCommandsText: PL_COMMANBDS,
} = commandsText;

menuText = RU_MENU, cmdText = RU_COMMANDS, msgText = RU_MESSAGES;

const setLang = (lang) => {
    if (lang == 'en') menuText = EN_MENU, cmdText = EN_MESSAGES, msgText = EN_MESSAGES;
    if (lang == 'be') menuText = BE_MENU, cmdText = BE_MESSAGES, msgText = BE_MESSAGES;
    if (lang == 'pl') menuText = Pl_MENU, cmdText = PL_MESSAGES, msgText = PL_MESSAGES;
    if (lang == 'uk') menuText = UK_MENU, cmdText = UK_MESSAGES, msgText = UK_MESSAGES;
    if (lang == 'ru') menuText = RU_MENU, cmdText = RU_COMMANDS, msgText = RU_MESSAGES;
}

module.exports = {
    eT,
    eB,
    eN,
    menuText,
    cmdText,
    msgText,
    setLang,
    links
}