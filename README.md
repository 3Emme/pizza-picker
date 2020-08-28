# __Pizza Picker__

#### __An application which a user can use to choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost., August 28, 2020__

#### By _**Emme Buentiempo**_

## Description

This application was created as an Epicodus assignment, with the intent to have it serve as a demonstration of knowledge after the program's fourth week. For the time being this README will serve as a checklist to demonstrate the satisfaction of all project requirements and objectives. 

[Link to live website](http://3emme.github.io/pizza-picker/)

## Project requirements:

  * Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost. **[Incomplete]**

  * Allow the user to choose toppings and size for the pizza they'd like to order. **[Incomplete]**
  * Create a pizza object constructor with properties for toppings and size. **[Incomplete]**
  * Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. **[Incomplete]**
  * Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes. **[Incomplete]**

## Specs for Program Behaviors

1.[X] **Take input from user for player 1 and player 2 names, and when submitted, append to each player's scorecard and display player 1 button group.**
### Input: "Emme" "Cameron" *click submit*
### Output: *Display player 1 name on player 1 scorecard* *Display player 2 name on player 2 scorecard* *Display player 1 button group*

2.[X] **When player 1 clicks player 1 roll button, diceroll function is activated, dice pulls random number from 1-6, and appends result on player 1's scorecard under turnTotal section.**
### Input: *Click* "Roll" button
### Output: player1.roll = 3. player1.turnTotal = 3. player1.overallScore = 0.

3.[X] **If dice value is 1, transform value of player1 turn total to 0. If rolled dice value is greater than 1, then rolled dice value is added to player1 turn total and appends result on player 1's scorecard under turnTotal section.**
### Input: *Click roll button* *roll = 5* *Click roll button* *roll = 1*
### Output: turnTotal = 0

4.[X] **After every dice roll, check value of player1 turn total. If value is 0, make no adjustments to player 1 score, clear the player 1 turn total section, hide the player 1 button group and show the player 2 button group**
### Input: *Click roll button* *roll = 5* *Click roll button* *roll = 1*
### Output: player1.overallScore = 0

5.[x] **When hold button is clicked, add the value of player1's turn total to player 1 score, transform value of player1 turn total to 0, clear the player 1 turn total section, hide the player 1 button group and show the player 2 button group. Player 1's overall score section is updated to display the current value of player1.overallScore**
### Input: *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 5, *end turn function* *show player2 button group*

6.[X] **Expand specs 1-5 for player 2, when clicking player 2 roll and hold button. Mirroring the same 1-5 specs for player 1, adjust player 2 score accordingly, clear the player 2 turn total section, hide the player 2 button group and show the player 1 button group in a similar manner**
### Input: *Click roll button* *roll = 5* *Click hold button*
### Output: player2.overallScore = 5, *end turn function* *show player1 button group*

7.[X] **When either player's overall score reaches >= 100, an alert will declare a winner and New Game button will display.**
### Input: player1.overallScore = 99, *Click roll button* *roll = 5* *Click hold button*
### Output: player1.overallScore = 104, *alert: "Congrats, Emme won!"* display reset button *Play again!*

8.[X] **When Pig Nose button is clicked, the player1 and player2 variables are deleted (removing the current player data), the pig nose button is hidden, and the name entry/player creation forms are displayed again.**
### Input: *Click Pig Nose Button*
### Output: *page effectively returns to original state*

## Project Objectives:

  * Code meets standards from previous weeks. **[Incomplete]**
  * Constructors and prototypes are used successfully. **[Incomplete]**
  * Application works as expected. **[Incomplete]**
  * Plain English specs are included in your README. **[Incomplete]**
  * Required functionality is in place by the 5:00pm Friday deadline. **[Incomplete]**
  * Project is in a polished, portfolio-quality state. **[Incomplete]**
  * Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology. **[Incomplete]**

  # _Previous Objectives:_

For reference, here are last week's standards:

  * Project is in a presentable, portfolio-quality state. **[Incomplete]**
  * Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools. **[Complete]**
  * Variable names are descriptive and use lower camel case (e.g. myVariableExample). **[Complete]**
  * Commits are made regularly with clear messages that finish the phrase "It will…". **[Complete]**
  * Project README that includes, bare minimum:
    * author name **[Complete]**
    * program name **[Complete]**
    * detailed setup instructions **[Complete]**
    * description **[Complete]**
    * copyright and license information **[Complete]**

## Specs



## Setup/Installation Requirements

* _open terminal_
* _type "cd desktop", then press enter_
* _type "git clone https://github.com/3emme/pizza-picker", then press enter_
* _locate and open folder on desktop named "pizza-picker"_
* _open the file named "index.html"_

## Support and contact details

_Please do not hesitate to contact me at emmettbuentiempo@gmail.com should you have any questions regarding this project_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

### License

Copyright (c) 2020 **_Emme Buentiempo_**
This software is licensed under the MIT license.