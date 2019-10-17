const Scene = require('telegraf/scenes/base')

const { enter, leave } = Stage
import Stage from 'telegraf/stage'
import Markup from 'telegraf/markup'
import textData from '../../utils/exportTextData'

const aboutClientsScene = new Scene('aboutClients');

aboutClientsScene.enter((ctx) => {
    /*
        После обращения к БД, циклом перебора массива с свойствами обьекта выводятся клиенты. в каждый пост выводимый массивом вставляется
        данные емодзи
    
        textData.eB.abo.clients.text.description
        textData.eB.abo.clients.text.logoCompanyPath
        textData.eB.abo.clients.text.offSiteCompanyLink 
        
    */
    ctx.reply('тирада о клиентах')
})



// aboutClientsScene.hears(`${textData.eB.abo.clients.header} ${textData.menuText.about.clients.header}`, enter('aboutClients'))

aboutClientsScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalogStart'))
aboutClientsScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'))
aboutClientsScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn))

// () => console.log('yeah')

export default aboutClientsScene