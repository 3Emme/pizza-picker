# __Pizza Picker__

#### __An application which a user can use to choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost., August 28, 2020__

#### By _**Emme Buentiempo**_

## Description

This application was created as an Epicodus assignment, with the intent to have it serve as a demonstration of knowledge after the program's fourth week. For the time being this README will serve as a checklist to demonstrate the satisfaction of all project requirements and objectives. 

[Link to live website](http://3emme.github.io/pizza-picker/)

## Project requirements:

  * Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost. **[Complete]**

  * Allow the user to choose toppings and size for the pizza they'd like to order. **[Complete]**
  * Create a pizza object constructor with properties for toppings and size. **[Complete]**
  * Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this. **[Complete]**
  * Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes. **[Complete]**

## Project Objectives:

  * Code meets standards from previous weeks. **[Incomplete]**
  * Constructors and prototypes are used successfully. **[Complete]**
  * Application works as expected. **[Complete]**
  * Plain English specs are included in your README. **[Complete]**
  * Required functionality is in place by the 5:00pm Friday deadline. **[Complete]**
  * Project is in a polished, portfolio-quality state. **[Complete]**
  * Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology. **[Complete]**

  _For reference, here are last week's standards:_

  * Project is in a presentable, portfolio-quality state. **[Complete]**
  * Code is clean, well-refactored, and easy-to-read. This includes correct indendation, spacing, and including only necessary comments and debugging tools. **[Incomplete]**
  * Variable names are descriptive and use lower camel case (e.g. myVariableExample). **[Complete]**
  * JavaScript business logic and user interface logic are separate. **[Complete]**
  * Tests are included for each behavior and code is committed after each test passes. **[Complete]**
  * Commits are made regularly with clear messages that finish the phrase "It will…". **[Complete]**
  * Project README that includes, bare minimum:
    * author name **[Complete]**
    * program name **[Complete]**
    * detailed setup instructions **[Complete]**
    * description **[Complete]**
    * copyright and license information **[Complete]**

## Specs for Program Behaviors

  1.[X] Take input from user for toppings and size via form, and when submitted, create an object for the pizza created using the input from the form to populate object property values.
    * Input: *Red Sauce* *Cheese* *Medium* *Click Submit*
    * Output: *pizza1.toppings = ["redSauce", "cheese"]
    * Output: *pizza1.size = "medium"

  2.[X] When pizza form is submitted, reveal pizza display section and populate with pizza order details from the pizza object property values.
    * Input: *Red Sauce* *Cheese* *Medium*
    * Output: 
      *Reveals pizza display section* 
      Toppings: Red Sauce, Cheese 
      Size: Medium 

  3.[X] Calulate pizza price from pizza object property values via cost method, add this new price property to the pizza constructor, and display the price value for the user created pizza along with the other propety values in the pizza display section.
    * Input: *Red Sauce* *Cheese* *Medium*
    * Output: *pizza1.cost = 10
    * Output:
      *Reveals pizza display section* 
      Toppings: Red Sauce, Cheese 
      Size: Medium
      Cost: $10.00

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