function positions(firstPlace, secondPlace, lastPlace){
    if(lastPlace == "Daniel" ) {
        const podio = [firstPlace, lastPlace, secondPlace];
        console.log(`1ª - Colocado ${podio[0]}`)
        console.log(`2ª - Colocado ${podio[1]}`)
        console.log(`3ª - Colocado ${podio[2]}`)
    }else if(secondPlace == "Daniel"){
        const podio = [secondPlace, firstPlace, lastPlace]
        console.log(`1ª - Colocado ${podio[0]}`)
        console.log(`2ª - Colocado ${podio[1]}`)
        console.log(`3ª - Colocado ${podio[2]}`)
    }else{
        const podio = [firstPlace, secondPlace, lastPlace]
        console.log(`1ª - Colocado ${podio[0]}`)
        console.log(`2ª - Colocado ${podio[1]}`)
        console.log(`3ª - Colocado ${podio[2]}`)
    }
}
(positions("Rafael", "Daniel", "Manoel"));


