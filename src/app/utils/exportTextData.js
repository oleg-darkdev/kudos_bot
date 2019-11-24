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




let allLangs = {
    en: 'en-gb',
    be: 'be',
    pl: 'pl',
    uk: 'uk',
    ru: 'ru'
}

let idClient = 18238 // получаем через телеграмм апи
// let clientProfileData = requestFunc(userSqlRequests.getSettingsForProfile(idClient))
let menuText = "",
    cmdText = "",
    msgText = "",
    lang = ""


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
    setLang
}