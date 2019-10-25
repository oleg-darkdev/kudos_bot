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
    enKudoCard: './dest/data/cardsPromo/en/very_happy[EN].png',
    outputTicketFile: './dest/data/kudoCard.pdf'
};



export default function (text) {
    let kudoCard = new cardPdfGenerator({
        size: [210, 330],
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


    kudoCard.image(path.enKudoCard, 0, 0, {
        align: 'center',
        valign: 'center'
    });

    let firstString = text;
    kudoCard.registerFont('roboto-regular', path.fonts.robotoRegular);

    kudoCard.font('roboto-regular')
        .fontSize(14)
        .text(firstString, 6, 68, {
            width: 195,
            continued: true,
            lineGap: 4.6

        });


    cl.blu('Finalize PDF file');
    // Finalize PDF file

    kudoCard.end();
}