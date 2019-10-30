import cl from 'node-cl-log';
import cardPdfGenerator from 'pdfkit';
import fs from 'fs';


/*
    ToDO:
        * отсылать юзеру pdf-файл и изображеньку для переотправки другому юзеру
        * обсудить с Викой ньюансы косяки
        * добавить обработку в случае ошибки


*/
const path = {
    fonts: {
        // robotoItalic: './dest/data/fonts/Roboto-Italic.ttf',
        // robotoMedium: './dest/data/fonts/Roboto-Medium.ttf',
        robotoRegular: './dest/data/fonts/roboto-regular.ttf',
        // helicopta: './dest/data/fonts/Helicopta.otf'
    },
    ruKudoCard: './dest/data/cardsPromo/ru/congralutions[RU].png',
    outputTicketFile: './dest/data/kudoCard.pdf'
};

export default function (text, language) {
    let kudoCard = new cardPdfGenerator({
        size: [220, 335],
        layout: 'landscape',
        margins: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }
    });

    kudoCard.pipe(fs.createWriteStream(path.outputTicketFile)).on('finish', function () {
        cl.gre('PDF closed');
    });

    let dirName = language.toLowerCase()

    // kudoCard.image(`./dest/data/cardsPromo/${dirName}/${file}[${language}].png`, 0, 0, {
    kudoCard.image(`./dest/data/cardsPromo/${dirName}/congralutions[${language}].png`, 0, 0, {
        align: 'center',
        valign: 'center'
    });

    let firstString = text;
    kudoCard.registerFont('roboto-regular', path.fonts.robotoRegular);

    kudoCard.font('roboto-regular')
        .fontSize(14)
        .text(firstString, 144, 68, {
            width: 192,
            continued: true,
            lineGap: 4.6

        });


    cl.blu('Finalize PDF file');
    // Finalize PDF file

    kudoCard.end();
}