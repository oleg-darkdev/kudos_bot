module.exports = {
    turquoiseOrgs: {
        header: "",
    },
    agile: {
        consumables: {
            pinIt: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '201%' ORDER BY lotIndex DESC",
            stickIt: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '202%' ORDER BY lotIndex DESC",
            // сделать для разных размеров досок
            whiteboards: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '204%' ORDER BY lotIndex DESC",
            writing: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '203%' ORDER BY lotIndex DESC",
            paper: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '206%' ORDER BY lotIndex DESC",
            visualization: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '207%' ORDER BY lotIndex DESC",
        },
        games: {
            allAgileGames: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '21%' ORDER BY lotIndex DESC",
            communications: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '211%' ORDER BY lotIndex DESC",
            development: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '212%' ORDER BY lotIndex DESC",
            instructing: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '213%' ORDER BY lotIndex DESC",
            management: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '214%' ORDER BY lotIndex DESC",
            lean: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '215%' ORDER BY lotIndex DESC",
            requirements: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '216%' ORDER BY lotIndex DESC",
            teamDynamics: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '217%' ORDER BY lotIndex DESC",
            product: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '218%' ORDER BY lotIndex DESC"
        },
        tools: {
            facilSessions: {
                open: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '221%' ORDER BY lotIndex DESC",
                collectData: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '222%' ORDER BY lotIndex DESC",
                generateIdeas: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '223%' ORDER BY lotIndex DESC",
                drawActionPlan: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '224%' ORDER BY lotIndex DESC",
                close: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '225%' ORDER BY lotIndex DESC"
            },
            visualization: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '227%' ORDER BY lotIndex DESC",
            management3_0: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '228%' ORDER BY lotIndex DESC",
            communicationTechnicians: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '226%' ORDER BY lotIndex DESC",
            plaining: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '229%' ORDER BY lotIndex DESC",
            allAgileTools: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '22%' ORDER BY lotIndex DESC"
        },
        eduMaterials: {
            allAgileEduMaterials: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '23%' ORDER BY lotIndex DESC",
            books: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '231%' ORDER BY lotIndex DESC",
            posters: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '232%' ORDER BY lotIndex DESC",
            vebinars: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '233%' ORDER BY lotIndex DESC",
            workshops: "SELECT lotIndex, name from catalog WHERE lotIndex LIKE '234%' ORDER BY lotIndex DESC"
        }
    }
}