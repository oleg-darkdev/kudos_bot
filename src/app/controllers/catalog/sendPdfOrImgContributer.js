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


const catalogsendPdfOrImgContributerScene = new Scene('catalogsendPdfOrImgContributer');

catalogsendPdfOrImgContributerScene.enter((ctx) => {

  ctx.reply(
    `${textData.cmdText.admin.choseAddresWhyCardSend}`,
    Markup.keyboard([
      [
        `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
        `${textData.eB.cat.doza} ${textData.menuText.catalog.doza}`
      ],
      [`${textData.eB.cat.agileGamesCommunity} ${textData.menuText.catalog.agileGamesCommunity}`],
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

const sendJpgFinalCard = (ctx, next) => {
  ctx
    .replyWithPhoto({
      source: fs.createReadStream(`${__dirname}/kudos_1.jpg`)
    }).then(() => next());
};


const sendJpgFinalCardOnDozaChat = (ctx, next) => {
  ctx.telegram.sendMessage(textData.links.dozaCommandChat, `${ctx.clientProfileData.firstName} ${textData.msgText.admin.infoMsgsendKudoCardOnThisChatStart} ${ctx.clientProfileData.secondName} ${textData.msgText.admin.infoMsgsendKudoCardOnThisChatEnd}`)
  // ctx.telegram.sendPhoto('-1001263977856', `url_for_file`).then(() => next());
  ctx.reply(`${ctx.clientProfileData.firstName} ${textData.cmdText.admin.cardSuccesSend}`).then(() => next());
};

const convertPdfFinalCard = (ctx, next) => {
  convertPdfToImg()
  ctx.reply(`${textData.eT.adminTxt.downPointer} ${textData.msgText.kudoCardFinalGenerationPdf} ${textData.eT.adminTxt.downPointer}`).then(() => next());
};





// catalogsendPdfOrImgContributerScene.hears(
//   `${textData.eB.cat.pdfFormat} ${textData.menuText.catalog.pdfFormat}`,
//   enter('catalogSendFinalPdfKudoCard')
// );

// catalogsendPdfOrImgContributerScene.hears(
//   `${textData.eB.cat.allFormat} ${textData.menuText.catalog.allFormat}`,
//   enter('catalogSendFinalImgAndPdfKudoCard')
// );


catalogsendPdfOrImgContributerScene.hears(
  `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
  convertPdfFinalCard,
  sendJpgFinalCard,
  (ctx) => {
    ctx.reply(
      `${textData.cmdText.catalog.choseAddresWhyCardSend}`,
      Markup.keyboard([
        [
          `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
          `${textData.eB.cat.doza} ${textData.menuText.catalog.doza}`
        ],
        [`${textData.eB.cat.agileGamesCommunity} ${textData.menuText.catalog.agileGamesCommunity}`],
        [
          // `${textData.eB.backBtn} ${textData.menuText.backBtn}`,
          `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
        ]
      ])
      .oneTime()
      .resize()
      .extra()
    )
  });

catalogsendPdfOrImgContributerScene.hears(
  `${textData.eB.cat.doza} ${textData.menuText.catalog.doza}`,
  convertPdfFinalCard,
  sendJpgFinalCard,
  sendJpgFinalCardOnDozaChat,
  (ctx) => {
    ctx.reply(
      `${textData.cmdText.admin.choseAddresDozaCardSend}`, Markup.keyboard([
        [
          `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
          `${textData.eB.cat.doza} ${textData.menuText.catalog.doza}`
        ],
        [`${textData.eB.cat.agileGamesCommunity} ${textData.menuText.catalog.agileGamesCommunity}`],

        [
          // `${textData.eB.backBtn} ${textData.menuText.backBtn}`,
          `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
        ]
      ])
      .oneTime()
      .resize()
      .extra()
    )
  });

catalogsendPdfOrImgContributerScene.hears(
  `${textData.eB.cat.doza} ${textData.menuText.catalog.agileGamesCommunity}`,
  convertPdfFinalCard,
  sendJpgFinalCard,
  sendJpgFinalCardOnDozaChat,
  (ctx) => {
    ctx.reply(
      `${textData.cmdText.admin.choseAddresAgileGamesCommunityCardSend}`, Markup.keyboard([
        [
          `${textData.eB.cat.jpgFormat} ${textData.menuText.catalog.jpgFormat}`,
          `${textData.eB.cat.doza} ${textData.menuText.catalog.doza}`
        ],
        [`${textData.eB.cat.agileGamesCommunity} ${textData.menuText.catalog.agileGamesCommunity}`],

        [
          // `${textData.eB.backBtn} ${textData.menuText.backBtn}`,
          `${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`
        ]
      ])
      .oneTime()
      .resize()
      .extra()
    )
  });

// catalogsendPdfOrImgContributerScene.hears(`${textData.eB.backBtn} ${textData.menuText.backBtn}`, enter('catalog'));
catalogsendPdfOrImgContributerScene.hears(`${textData.eB.goMainMenuBtn} ${textData.menuText.goMainMenuBtn}`, enter('mainMenu'));
// catalogsendPdfOrImgContributerScene.on('message', (ctx) => ctx.reply(textData.msgText.ifUserSendMsgVicePressBtn));

export default catalogsendPdfOrImgContributerScene;