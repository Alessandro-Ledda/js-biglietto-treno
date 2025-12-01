//CALCOLARE IL PREZZO DEL BIGLIETTO IN BASA ALLA TRATTA E ETA' PASSEGGERO

    let prezzoKm = 0.21;
    

//INPUT (VARIABILI E DATI IN INGRESSO)
    //CHIEDIAMO A USER LA TRATTA ESPRESSA IN KM

    const trattaUser = parseInt(prompt ("Quanti km devi percorrere?"));
    //console.log(trattaUser)

    //CHIEDIAMO L'ETA' DI USER
    const etaUser = parseInt(prompt("Quanti anni hai?"));
    //console.log(etaUser)



//ELABORAZOINE
    //CALCOLO LA TARIFFA IN EURO (CONVERTO I KM IN EURO ; 021$ A KM)

    let prezzoTrattaTot = trattaUser * prezzoKm;
    //console.log(prezzoTrattaTot)


    //VERIFICO ETA'
        //SE USER HA ETA'<= A 18 (SCONTO 20%)
    if (etaUser <= 18){
        //applica sconto del 20%
        const prezzoScontato = (prezzoTrattaTot * 20) / 100;
        console.log(prezzoScontato + " " + "euro")


        //SE USER HA ETA'>= A 65 (SCONTO 40%)
    }else if (etaUser >= 65){ 
        const prezzoScontato = (prezzoTrattaTot * 40) / 100;
        console.log(prezzoScontato + " " + "euro")
    } else {
        console.log(prezzoTrattaTot)
    }


        

//OUTPUT(PREZZO FINALE CON NON PIù DI DUE CIFRE DECIMALI)

