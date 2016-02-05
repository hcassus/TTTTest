# TTTTest
A terrific tic tac toe test 

## Bugs Found
* Winner was automatically assigned in first move in Firefox due to absence of content on cell turning it's innerText undefined. The bug was fixed by assigning to cells an empty string in case of undefined texts
* The winner's name was shown incorrectly since the change of turn occurred before evaluating the winner. The bug was fixed by inverting this order, and not changing players if game is over in order to maintain the behavior of X being the first player.

## Refactor
* In order to avoid nested loops, playAgain function now iterates over a list of cells in a single loop
* changePlayer function has been extracted in order to improve readability
* cellClicked has been divided in two parts to improve readability and variable reuse

## Testing
Since I'm not fluent in JS Unit testing, there may be some suboptimal implementations.

The beforeEach function injects a simplified version of the grid used by the game. The original intention was to use the actual game page, but the lack of knowledge in the tools I have used led me to adopt this strategy. By stubbing the HTML I was able to unit test methods that interacted with the page.

The afterEach function had the intention of reseting the game, so that the turns woulf be respected and the asserts wouldn't be messed up.

The tests were built using Jasmine + Karma, and can be executed from the console by typing `[...]/node_modules/karma/bin/karma run`.
