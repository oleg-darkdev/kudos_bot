import about from './ruCommandsText/about'
import settings from './ruCommandsText/settings'
import work from './ruCommandsText/work'
import store from './ruCommandsText/store'
import feedback from './ruCommandsText/feedback'
import events from './ruCommandsText/events'
import catalog from './ruCommandsText/catalog'
import admin from './ruCommandsText/admin'

export default {
    start: "Про выбор языка в 3 экземплярах",
    mainMenu: {
        header: "Вы находитесь в главном меню бота. Что вас интересует?"
    },
    admin,
    about,
    work,
    feedback,
    events,
    settings,
    store,
    catalog,
    work, //вместо addResume - учти при рефакторинге
    startAddResume: "Начать",
    addPhotoInResume: "Добавить фото",
    yesBtn: "Да",
    noBtn: "Нет",
    skipeBtn: "Пропустить",
    sendContact: "Отправить контакт",
    officialSiteBtn: "переход на сайт",
    commandsList: {
        langSet: {
            ru: "/langru",
            be: "/langbe",
            en: "/langen",
            uk: "/languk",
            pl: "/langpl",
        }
    },
    langSet: {
        header: 'Выберите предпочитаемый язык',
        hiFavoriteUser: "Здарова",
        ru: `👋 Hello !
        You can change your language - ru:`,
        be: `👋 Hello !
        You can change your language - be:`,
        en: `👋 Hello !
        You can change your language:`,
        uk: `👋 Hello !
        You can change your language - uk:`,
        pl: `👋 Hello !
        You can change your language -pl:`,
    }






}