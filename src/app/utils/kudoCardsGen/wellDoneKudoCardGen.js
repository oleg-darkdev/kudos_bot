import cl from 'node-cl-log';
import cardPdfGenerator from 'pdfkit';
import fs from 'fs';

const path = {
    fonts: {
        // robotoItalic: './dest/data/fonts/Roboto-Italic.ttf',
        // robotoMedium: './dest/data/fonts/Roboto-Medium.ttf',
        robotoRegular: './dest/data/fonts/roboto-regular.ttf',
        // helicopta: './dest/data/fonts/Helicopta.otf'
    },
    outputTicketFile: './dest/data/kudoCard.pdf'
};

export default function (text, language) {
    let kudoCard = new cardPdfGenerator({
        size: [230, 335],
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

    kudoCard.image(`./dest/data/cardsPromo/${dirName}/well_done[${language}].png`, 0, 0, {
        align: 'center',
        valign: 'center'

    });

    let firstString = text;
    kudoCard.registerFont('roboto-regular', path.fonts.robotoRegular);

    kudoCard.font('roboto-regular')
        .fontSize(14)
        .text(firstString, 6, 79, {
            width: 195,
            continued: true,
            lineGap: 4.6

        });


    cl.blu('Finalize PDF file');
    // Finalize PDF file

    kudoCard.end();
}