// веротно придется добавить сортировку по idClient для поиска билетов в бд

module.exports ={
        main: "SELECT * from tickets",
        sortByEvent: (eventIndex) => `SELECT * from tickets WHERE indexEvent LIKE '${eventIndex}' ORDER BY numberOnList DESC`,
        setTicketNumber: "", // добавляет еще одного наченияе с номером билета
        getDataForTicket: "SELECT * from tickets", // берем данные из последнего в списке билета для генерайия пдф версии
        getAllTicketsAboitIdClient: (idClient) =>  `SELECT * from tickets WHERE idClient LIKE ${idClient}`
        // workshops: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '234%' ORDER BY lotIndex DESC"
}

