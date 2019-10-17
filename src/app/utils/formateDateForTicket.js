import moment from 'moment';


export default (lang, date) => {

    moment.locale(lang)
    let tempDate = moment(date).format('LL')
    return tempDate.slice(2, -7)
}
