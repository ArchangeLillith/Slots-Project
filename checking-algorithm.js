//Initial check for first two rows
function initialColumnCheck(symbol){
    //if the symbol does not match any other, and if it does not match any wilds (otters)
    if (symbol !== symbol ||
        symbol !== otter){
            //but there ARE ruins then we run ONLY the ruins algorithm
        if(checkingForRuins()){
            console.log('trigger for ruins algorithm');
        }
        //and if there aren't three ruins, there are no scoring matches on the board
        else{
            console.log('not a winner :(');
            
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