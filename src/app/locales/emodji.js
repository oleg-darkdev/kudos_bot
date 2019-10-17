import buttonsEmodji from "./emodji/buttons"
import textEmodji from "./emodji/text"
import emodjiForNumbers from "./emodji/numbers"


// First 3 letters on word
const { 
    addResumeButtonsEmodji: addResumeBtn,
    aboutButtonEmodji: abo,
    catalogButtonEmodji: cat,
    settingsButtonEmodji: set,
    feedbackButtonEmodji: fee,
    contactsButtonEmodji: con,
    eventsButtonEmodji: eve,
    storeButtonEmodji: sto,
    workButtonEmodji: wor,
    adminButtonEmodji: admBtn,
    languageSetButtonEmodji: langSet
} = buttonsEmodji

const {
    addResumeTextEmodji: addResumeText,
    adminTextEmodji: admText,
    other,
    events
} = textEmodji;



export default {
    emodjiForButtons: {
    // On Buttons    
        addResumeBtn,
        nextBtn: "➡️",
        backBtn: "⬅️",
        goMainMenuBtn: "🏠",
        sendContact: "📟",
        start: "startAddResume",
        yesBtn: "✅",
        noBtn: "❌",
        active: "🔘",
        passive: "⚪",
        up: "🔺",
        down: "🔻",
        link: "🐾",
        admin: "🔐",
        paymentCard: "💳",
        cart: "🛍️",
        presentation: {
            nextBtn: '⏩',
            backBtn: '⏪',
            outBtn: '⏮',
        },
        admBtn,
        langSet,
        abo,
        cat,
        fee,
        set,
        wor,
        sto,
        eve, 
    },
    emodjiForText: {
        // On Text
        addResumeText,
        admText,
        events,
        mainMenu: "/../",
        other,
        info: "ℹ️",
        congralution: "🥳",
        warning: "🔵"

    },
    emodjiForNumbers 
}