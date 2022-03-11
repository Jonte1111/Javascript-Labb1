"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {
    
};

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
    //oGameData.gameField = Array('X', '', '', 'X', '', '', 'X', '', '');
    //oGameData.gameField = Array('X', '', '', '', 'X', '', '', '', 'X');
    //oGameData.gameField = Array('', '', 'X', '', 'X', '', 'X', '', '');
    oGameData.gameField = Array('X', 'X', 'X', 'O', 'O', 'O', 'X', 'O', 'X');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //"Flagga" som indikerar om användaren klickat för checkboken.
    oGameData.timerEnabled = false;

    //Timerid om användaren har klickat för checkboxen. 
    oGameData.timerId = null;

}

/**
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare, 
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
oGameData.checkForGameOver = function() {
    function checkHorizontal() {
   if(oGameData.gameField[0] === 'X' && oGameData.gameField[1] === 'X' && oGameData.gameField[2] === 'X') {
    return 1;
   }
   else if(oGameData.gameField[3] === 'X' && oGameData.gameField[4] === 'X' && oGameData.gameField[5] === 'X') {
    return 1;
}
   else if(oGameData.gameField[6] === 'X' && oGameData.gameField[7] === 'X' && oGameData.gameField[8] === 'X') {
    return 1;
}
   else if(oGameData.gameField[0] === 'O' && oGameData.gameField[1] === 'O' && oGameData.gameField[2] === 'O') {
    return 2;
   }
   else if(oGameData.gameField[3] === 'O' && oGameData.gameField[4] === 'O' && oGameData.gameField[5] === 'O') {
    return 2;
}
   else if(oGameData.gameField[6] === 'O' && oGameData.gameField[7] === 'O' && oGameData.gameField[8] === 'O') {
    return 2;
}
   else {
    return 0;
   }
};
function checkVertical() {
    if(oGameData.gameField[0] === 'X' && oGameData.gameField[3] === 'X' && oGameData.gameField[6] === 'X') {
     return 1;
    }
    else if(oGameData.gameField[1] === 'X' && oGameData.gameField[4] === 'X' && oGameData.gameField[7] === 'X') {
     return 1;
 }
    else if(oGameData.gameField[2] === 'X' && oGameData.gameField[5] === 'X' && oGameData.gameField[8] === 'X') {
     return 1;
 }
    else if(oGameData.gameField[0] === 'O' && oGameData.gameField[3] === 'O' && oGameData.gameField[6] === 'O') {
     return 2;
    }
    else if(oGameData.gameField[1] === 'O' && oGameData.gameField[4] === 'O' && oGameData.gameField[7] === 'O') {
     return 2;
 }
    else if(oGameData.gameField[2] === 'O' && oGameData.gameField[5] === 'O' && oGameData.gameField[8] === 'O') {
     return 2;
 }
    else {
     return 0;
    }
 };
 function checkDiagonal() {
    if(oGameData.gameField[0] === 'X' && oGameData.gameField[4] === 'X' && oGameData.gameField[8] === 'X') {
     return 1;
    }
    else if(oGameData.gameField[2] === 'X' && oGameData.gameField[4] === 'X' && oGameData.gameField[6] === 'X') {
     return 1;
 }
    else if(oGameData.gameField[0] === 'O' && oGameData.gameField[4] === 'O' && oGameData.gameField[8] === 'O') {
     return 2;
    }
    else if(oGameData.gameField[2] === 'O' && oGameData.gameField[4] === 'O' && oGameData.gameField[6] === 'O') {
     return 2;
 }
    else {
     return 0;
    }
 };
let h = checkHorizontal();
let v = checkVertical();
let d = checkDiagonal();
 function checkWin() {
     if((h === 1 || v === 1 || d === 1) && (h !== 2 && v !== 2 && d !== 2)) {
         return 1;
     }
     else if((h === 2 || v === 2 || d === 2) && (h !== 1 && v !== 1 && d !== 1)) {
         return 2;
     }
     else if(h === 0 && v === 0 && d === 0) {
         return 0;
     }
     else {
         return 3;
     }
 }
return checkWin();
}


