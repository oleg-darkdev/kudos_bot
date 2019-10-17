module.exports = {
        main: "SELECT * from users",

        // присваивать полученные значения в стор 

        getSettingsForProfile: (id) => `SELECT firstName, secondName, id, valute, language, phoneNumber, country, town, readInstruction, email, orders, tickets from  users WHERE id LIKE '${id}'`,
        checkUserId: (id) => `SELECT id from users WHERE id LIKE '${id}'`, //
        getDataForTicket: "SELECT firstName, secondName, id from users",
        setTicketNumber: "", // добавляет еще одного наченияе с номером билета
        // workshops: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '234%' ORDER BY lotIndex DESC"
}