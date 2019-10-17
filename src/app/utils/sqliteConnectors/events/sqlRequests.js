// Передается  indexEvent ивента и  ищеться только по нимуу данныые
// indexEvent - не пашет
module.exports = {
    main: "SELECT * from events",
    dateAndIndex: "SELECT date, indexEvent from events ORDER BY date DESC ",
    allSortByData: "SELECT * from events ORDER BY date DESC ",
    getDataForTicket: "SELECT * from events",
    // getDataForTicket: "SELECT name, indexEvent, organisator, donate, town, place, date, id, timeStart, registration from events",
    allWargmeiningEvents: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '3%' ORDER BY indexEvent DESC",
    allAgileEvents: "SELECT name, date, formate, description,  indexEvent   from events WHERE indexEvent LIKE '2%' ORDER BY indexEvent DESC",
    allAgileWorkshops: "SELECT name, date, formate, description,  indexEvent   from events WHERE indexEvent LIKE '21%' ORDER BY indexEvent DESC",
    allAgileMeetups: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '22%' ORDER BY indexEvent DESC",
    allAgileVebinars: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '23%' ORDER BY indexEvent DESC",
    allTurqoiseEvents: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '1%' ORDER BY indexEvent DESC",
    allTurqoiseWorkshops: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '11%' ORDER BY indexEvent DESC",
    allTurqoiseMeetups: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '12%' ORDER BY indexEvent DESC",
    allTurqoiseVebinars: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '13%' ORDER BY indexEvent DESC",
    warGameingEvents: "SELECT name, date, formate, description,  indexEvent from events WHERE indexEvent LIKE '3%' ORDER BY indexEvent DESC",    
    firstName: "",
    secondName: "",
    id: "",
    numberOnList: "",
    organisator: "",
    donate: "",
    place: "",
    addres: "",
    date: "",
    timeStart: ""
        // workshops: "SELECT indexEvent, name from catalog WHERE indexEvent LIKE '234%' ORDER BY indexEvent DESC"
}