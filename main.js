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


// *--------------------GLOBAL VARIABLES---------------------*

let MONEY = 0;
let BET = 40;
let RUINS = [];

// *--------------------FUNCTIONS IN PROGRESS---------------------*
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


// *--------------------START OF THE REAL CODE---------------------*
window.addEventListener('load', function(){
    const CANVAS = document.getElementById('canvas1');
    const CTX = CANVAS.getContext('2d');
    CANVAS.width = 500;
    CANVAS.height = 500;
    
    class Game {
        constructor (width, height){
            this.width = width;
            this.height = height;
            this.UI = new UI(this);
            this.gameOver = false;
        }
        draw(context){
            this.UI.draw(context);
        }
    }
    
    const game = new Game(CANVAS.width, CANVAS.height);

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
        game.draw(CTX);
        game.update(deltaTime);
        requestAnimationFrame(animate);
    }
    //Calling the game the first time
    animate(0);
});
