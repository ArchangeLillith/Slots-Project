
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="600" height="auto">
  </a>
</div>

<h3 align="center">Slots Project</h3>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
     <li><a href="#term-clarification">Terms Used</a></li>
     <li><a href="#ideals">Ideals for the Project</a></li>
     <li><a href="#symbols">Symbol Design</a></li>
     <li><a href="#side-game-stuff">Side Game Ideas</a></li>
     <li><a href="#algorithm-notes">Algorithm Notes</a></li>
     <li><a href="#file-structure">File Structure</a></li>
     <li><a href="#questions">Questions</a></li>
     <li><a href="#research">Research</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This will be a space to lay out the logistics while I'm working on this project

<!-- TERM CLARIFICATION -->
## Term Clarification
   <br> -Symbols are the tiles on the reels of the slots</br> 
   <br> -Items are the bonus items dropped by the ruins, and are 'collected' on the side of the machine.</br>
   <br> -Sticky Wilds: the symbol lands and 'sticks' in that spot. When the slot is rolled again, it moved vertically one space down and if it moves off the board is gone.</br>
   <br> -Prime spins are discounted spins</br>
   <br> -Picking game is a bonus game that lets you select something and gives you a prize off of it, typically payout is on average the same as what the spin would have been worth, example if the spin would have been calculated as 30 payout, the game averages a 30 payout. The base payout of the symbols doesn't matter when the game is complete, just a good way to calculate how much a bonus game should pay out to keep the balance of the payout percentages.</br> 
   <br> -Ruins items: Given by three/ three or more ruins, there are 4(?) slots to fill. Each item has a chance to drop, and if you get a dupe it gives you money instead.</br>

<!-- IDEALS -->
## Ideals
* Moving reels that can be stopped on button click
* Scoring system like a real slot machine
* Ability to bet min to max
* Free or prime spins
* Jackpots
* Animations and sound bytes for
    <br>-Jackpots
    <br>-Spinning
    <br>-Stopping?
    <br>-Prizes, be it money payout or like a flip to prime spins
* UI to show:
   <br> -Money in
    <br>-Current bet
    <br>-Machine payout, ticking up both the payout and the money in as it does
    <br>-Line to display full payout, static
    <br>-A scrolling/fade in-out tooltips section for what symbols pay out ect
    <br>-Cash out button
    <br>-Perhaps a change game functionality?
    <br>-Lines in play if applicable, and bet per line if applicable
* Sound design for a small win (% less than 100 of total bet), medium win (% to be decided upon), large win (% to be decided upon), and jackpot. Perhaps separate sounds for ruins pick me as well.

<!-- SYMBOLS -->
## Symbols: 
-15 can be displayed at a time
1) Otters
      Wilds
2) Cats
3) Moles
4) Vagabond
     Spin for which on your get?
5) Birds
6) WA
     Sticky wilds?
10) Corvids
     4-5 in a line, raid?
11) Lizards
     Blows up another symbol?
12) Ruins
     Three/ three in a row to explore, gives items

<!-- RUINS ITEMS -->
## Ruins Items
  * Anvil
      * Changes one item, "crafts" it
  * Sword
  * Tea
      * Refresh one item in your stock
  * Boot
  * Bag
      * Can save a portion of the board

<!-- ALGORITHM NOTES -->
Keep in mind, what problems are we solving?

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

<!-- SIDE GAME STUFF -->
## Side Game Stuff
   * A button on UI to swap games
   * Use of the board, maybe winter/autumn themes?
      * What would this change?
<!-- FILE STRUCTURE -->
## File Structure 
     * main.js 
          * Setup and requestAnimationFrame plus global variables
     * checking-algorithm.js 
          * Checking algorithm
     * scoring.js
     * ruins.js
          * state management and scoring for the ruins
          * maybe also handles the interactive parts of the different items
     * Symbol file
          * class for generic, as well as child classes with specific properties
     * Stats dump file
          * holds arrays of how much each symbol has made 
     * UI 
          * handles displaying all the animations and sound effects as well as the design of the slot machine
     * Image folder
<!-- QUESTIONS / THINGS TO SOLVE -->
## Questions
   * For ruins, when you get an item the first time should it pay out? Or do you just get the item?
        * I imagine it'd be a base for matching ruins and if you get a dupe it gives a small bonus, like 30 base +5 for dupe.
   * How do we structure the if then?
        * Maybe we could do a generic if then, saying ```if (symbol === symbol) then ...```
   * For prime spins, do we use a different set of reels?
   * How do we handle symbol rarity?
      * We should do a flat rarity. Easier to handle, easier to build around for symbol distribution. Same with ruins items, but we can impliment a fluxuating rarity if so desire and test to see the feel.

<!-- RESEARCH -->
## Research 
-Probability and the distribution of the symbols and math used to calculate winning potential
https://www.casinosmash.com/features/how-to-use-probability-to-win-at-slots

-More math, goes in depth on reels and the math to calculate the possibilities of a spin
https://www.youtube.com/watch?v=JyIWQIdxaOA

-Slots calculator from above vid, excel spreadsheet to calculate winning probs
https://docs.google.com/spreadsheets/d/1beGMKgDcoQguu8ZhHphPO5DLq48bAbk-vfuTty1X0pg/edit#gid=605918202

-Psychology of slots and gambling
https://youtube.com/watch?v=Fpj43qwSmtg&feature=shares

-More in depth psychology about the brain and it's reaction to slots, gambling addiciton covered here too
https://youtube.com/watch?v=V6HwVzjFndg&feature=shares

-Deep dive into psychology of gambling in a casino
https://youtube.com/watch?v=X2G__MV8cIg&feature=shares

-ROOT reference sheet for rules, maybe some use
https://www.reddit.com/r/boardgames/comments/9c04sn/root_reference_sheet/

-Free board game icons
https://www.reddit.com/r/boardgames/comments/s1fbzt/ive_created_250_icons_for_board_game_designers_to/

-ROOT font
https://www.reddit.com/r/rootgame/comments/woqa75/comment/ikcgubg/

-Some assets for ROOT
https://boardgamegeek.com/thread/2252658/share-your-assets-templates-variants

-Picture for some factions png blank background source
https://owenmcg.com/games/2020/01/22/root.html

-Use the logic from this in the logic for the clicking into place, and perhaps in the way each tile on the board is referred to

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- ROADMAP 
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).




<p align="right">(<a href="#readme-top">back to top</a>)</p>-->
