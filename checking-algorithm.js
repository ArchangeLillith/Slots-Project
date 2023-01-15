//Initial check for first two rows
function initialColumnCheck(symbol){
    //if the symbol does not match any other, and if it does not match any wilds (otters)
    if (symbol !== symbol ||
        symbol !== otter){
        //and if there aren't three ruins, there are no scoring matches on the board
        if(!checkingForRuins()){
            console.log('dead run');
        }
        else{
            [algorithm trigger]
        }
    }
}

function checkingForRuins(1array){
    for(i = 0; i > 3; i++){
        if(ruins){
            if(ruins >= 3){
                console.log('winner')
            }
            else{
                console.log('not a winner');
            }
        }
    }
}