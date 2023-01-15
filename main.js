// *--------------------SKELETON OF THE LOGIC---------------------*
// Start by checking column 1 and 2 against each other:

// if (no equal){
//     if(!function checking for ruins){
//         dead run 
//     }
//     else{
//         [algorithm trigger]
//     }
// }

// This necessitates:
// function intitialColumnCheck()
// function doRuinsExist()

// *--------------------FILE STRUCTURE---------------------*
* main.js 
    Setup and requestAnimationFrame plus global variables
* checking-algorithm.js 
    Checking algorithm
* scoring.js
* ruins.js
    state management and scoring for the ruins
    maybe also handles the interactive parts of the different items
* Symbol file
    class for generic, as well as child classes with specific properties
* Stats dump file
    holds arrays of how much each symbol has made 
* UI 
    handles displaying all the animations and sound effects as well as the design of the slot machine
* Image folder

// *--------------------NEEDED ALGORITHM NOTES---------------------*

// TODO: Keep in mind, what problems are we solving?

function checkingForMatches(){
    * Checking to calculate matches
    * What symbols are matching?
    * Are the symbols in a winning position
    -Accounting for otters:
        (symbol == symbol ||
        symbol == otter)
    * How do we decide where to check?
    * If symbols match and are in position to score, what symbols are they (blacklist ruins in this as we have already checked that and we can store a variable from when we did saving where in the array they are and to ignore those)
    * Turn off mousedown events while the algorithm is running so no janky stuff can happen 
    //! Ruins check - moved into its own algorithm
}

function scoringAlgorithm(){
    * Passed values from checking algorithm
    * Values include
        -Ruins items 
        -Money 
        -Stats 
    * For ruins, state management for (none)/(avaliable)/(exhausted)
        -Different visuals and sounds for each state change
    * Money += (variable passed in from checking algorithm)
    * Stats can be passed straight into stats.js from the main loop as things are calculated
        -Example, [crows += variable passed in from scoring loop] before loop variable is added to the cumulative variable that will be added into global MONEY variable
}

function scoringForRuins(){
    * 
}

// *--------------------GLOBAL VARIABLES---------------------*

let MONEY = 0;
let BET = 40;
let RUINS = [];

// *--------------------FUNCTIONS---------------------*
main function 
    get canvas here 

game selection
    able to trigger off of on load and also after button click 

cash out 
    would we handle this as a 'game over'?

chunky algorithm for winning
Well, more like a lot of these LOL 

mousedown Event listener 
    this can split into handling different mouse down Event, like anvil and bet changes 

    // function onMouseUp(evt) {
    //     if(SELECTED_PIECE.isClose()) {
    //         SELECTED_PIECE.snap();
    //         if(isComplete() && END_TIME == null){
    //             let now = new Date().getTime();
    //             END_TIME = now;
    //         }
    //     }
    //     SELECTED_PIECE = null;
    // }

This would be a good way to handle the end of the spin if modified to fit our purposes 
    see the nested if then and how it uses different methods and gets the answers


