import emodji from '../../locales/emodji'
export default function (temp) {

    const {
        emodjiForNumbers: eN
    } = emodji;


    let secondSymbolOnCounterSteps = temp[1],
        emodjiCounterStepsAddResume = [];

    switch (secondSymbolOnCounterSteps) {
        case '0':
            emodjiCounterStepsAddResume[0] = eN.zero
            break;
        case '1':
            emodjiCounterStepsAddResume[0] = eN.one
            break;
        case '2':
            emodjiCounterStepsAddResume[0] = eN.two
            break;
        case '3':
            emodjiCounterStepsAddResume[0] = eN.three
            break;
        case '4':
            emodjiCounterStepsAddResume[0] = eN.four
            break;
        case '5':
            emodjiCounterStepsAddResume[0] = eN.five
            break;
        case '6':
            emodjiCounterStepsAddResume[0] = eN.six
            break;
        case '7':
            emodjiCounterStepsAddResume[0] = eN.seven
            break;
        case '8':
            emodjiCounterStepsAddResume[0] = eN.eight
            break;
        case '9':
            emodjiCounterStepsAddResume[0] = eN.nine
            break;
    }
    return emodjiCounterStepsAddResume;

}
