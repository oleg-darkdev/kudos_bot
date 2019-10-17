export default function (menuText, emodji)  {
    let menuButtons = [];
    
    
    const {
        emodjiForText: eT,
        emodjiForButtons: eB,
        emodjiForNumbers: eN
    } = emodji;

    menuButtons.push(
        [`${menuText.catalog.turquoiseOrgs.header} ${eB.cat.turquoiseOrgs.header}`], 
        [`${menuText.catalog.agile.header} ${eB.cat.agile.header}`]
    )

    return menuButtons
}
