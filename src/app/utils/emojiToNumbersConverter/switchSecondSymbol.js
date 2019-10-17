import emodji from '../../locales/emodji'
export default function (temp) {

    const {
        emodjiForButtons: eB
    } = emodji;

    let secondSymbol = temp[1],
        numbers = [];

    switch (secondSymbol) {
        case eB.fee.faq.firstQuestion:
            numbers[0] = 1
            break;
        case eB.fee.faq.secondQuestion:
            numbers[0] = 2
            break;
        case eB.fee.faq.thirdQuestion:
            numbers[0] = 3
            break;
        case eB.fee.faq.fourthQuestion:
            numbers[0] = 4
            break;
        case eB.fee.faq.fifthQuestion:
            numbers[0] = 5
            break;
        case eB.fee.faq.sixthQuestion:
            numbers[0] = 6
            break;
        case eB.fee.faq.seventhQuestion:
            numbers[0] = 7
            break;
        case eB.fee.faq.eigthQuestion:
            numbers[0] = 8
            break;
        case eB.fee.faq.ninthQuestion:
            numbers[0] = 9
            break;
        // case '9':
        //     numbers[0] = eN.nine
        //     break;
    }
    return numbers;

}

