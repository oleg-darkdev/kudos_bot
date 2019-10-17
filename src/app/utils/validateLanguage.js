import messagesText from '../locales/messagesText'
import commandsText from '../locales/commandsText'
import menuTextLang from '../locales/mainMenuText'

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


let languageStgs  = { 
    menuText: "",
    cmdText: "",
    msgText: ""
}

export default (language)=> {
    if (language == 'be') languageStgs.menuText = BY_MENU; languageStgs.cmdText = BY_COMMANDS; languageStgs.msgText = BY_MESSAGES; 
    if (language == 'ru') languageStgs.menuText = RU_MENU; languageStgs.cmdText = RU_COMMANDS; languageStgs.msgText = RU_MESSAGES; 
    if (language == 'en-gb') languageStgs.menuText = EN_MENU; languageStgs.cmdText = EN_COMMANDS; languageStgs.msgText = EN_MESSAGES; 
    if (language == 'pl') languageStgs.menuText = PL_MENU; languageStgs.cmdText = PL_COMMANDS; languageStgs.msgText = PL_MESSAGES; 
    if (language == 'uk') languageStgs.menuText = UK_MENU; languageStgs.cmdText = UK_COMMANDS; languageStgs.msgText = UK_MESSAGES; 

    return languageStgs
}