//CALCOLARE IL PREZZO DEL BIGLIETTO IN BASA ALLA TRATTA E ETA' PASSEGGERO

    //SETUP (VARIABII UTILI)
    const prezzoKm = 0.21;
    let risultato;
    

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
        risultato = `il costo del tuo biglietto è scontato del 20% e corrisponde a ${prezzoScontato}`
        //console.log(prezzoScontato + " " + "euro")


        //SE USER HA ETA'>= A 65 (SCONTO 40%)
    }else if (etaUser >= 65){ 
        const prezzoScontato = (prezzoTrattaTot * 40) / 100;
        risultato = `il costo del tuo biglietto è scontato del 40% e corrisponde a ${prezzoScontato}`
        //console.log(prezzoScontato + " " + "euro")
    }else {
        risultato = ("il costo del tuo biglietto corrisponde a" + " " + prezzoTrattaTot);
        //console.log(prezzoTrattaTot)
    }


        

//OUTPUT(PREZZO FINALE CON NON PIù DI DUE CIFRE DECIMALI)
    document.getElementById("risultato").innerHTML = risultato;

    
