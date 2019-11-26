const Scene = require('telegraf/scenes/base'),
  fs = require('fs');
import cl from 'node-cl-log';

const {
  enter,
  leave
} = Stage;
import Stage from 'telegraf/stage';
import Markup from 'telegraf/markup';
import textData from '../../utils/exportTextData';
import convertPdfToImg from '../../utils/convertPdfToImg'


const catalogsendPdfOrImgScene = new Scene('catalogsendPdfOrImg');

catalogsendPdfOrImgScene.enter((ctx) => {
  //
  ctx.reply(
    `${textData.cmdText.catalog.cardDescriptionStart} ${textData.cmdText.catalog.wellDone}

${textData.cmdText.catalog.choseYourLanguage}`,
    Markup.keyboard([
      [
        `${textData.eB.cat.pdfFormat} ${textData.menuText.catalog.pdfFormat}`,
        `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
        `${textData.eB.cat.allFormat} ${textData.menuText.catalog.allFormat}`,

      ],

      [
        // `${textData.eB.backBtn} ${textData.menuText.backBtn}`,
        `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
      ]
    ])
    .oneTime()
    .resize()
    .extra()
  );
});

const sendPdfFinalCard = (ctx, next) => {
  ctx
    .replyWithPhoto({
      source: fs.createReadStream(`${__dirname}/kudos_1.jpg`)
    }).then(() => next());
};

const convertPdfFinalCard = (ctx, next) => {
  convertPdfToImg()
  ctx.reply('Файл сконвертирован').then(() => next());
};





// catalogsendPdfOrImgScene.hears(
//   `${textData.eB.cat.pdfFormat} ${textData.menuText.catalog.pdfFormat}`,
//   enter('catalogSendFinalPdfKudoCard')
// );

// catalogsendPdfOrImgScene.hears(
//   `${textData.eB.cat.allFormat} ${textData.menuText.catalog.allFormat}`,
//   enter('catalogSendFinalImgAndPdfKudoCard')
// );


catalogsendPdfOrImgScene.hears(
  `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
  convertPdfFinalCard,
  sendPdfFinalCard
  // enter('catalogSendFinalImgKudoCard')
);



// catalogsendPdfOrImgScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'));
catalogsendPdfOrImgScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'));
// catalogsendPdfOrImgScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn));

export default catalogsendPdfOrImgScene;