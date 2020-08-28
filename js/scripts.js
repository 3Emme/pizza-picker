// Business Logic Start

// Constructor function for a pizza
function Pizza(orderNumber, pizzaToppings, pizzaSize) {
  //this.customerName = customerName; ^^tbi add also new parameter for customerName above
  this.orderNumber = orderNumber;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

// Business Logic End
// User Interface Logic Start

$(document).ready(function() {
let orderNumber = 0
// function for name submission
  $("form#pizza_picker_form").submit(function(event) {
    event.preventDefault();
    // const pizza1Name = $("input#pizza1NameInput").val();
    // console.log("pizza1Name: " + pizza1Name);
    let pizzaToppings = pizzaToppingArray (values passed from form);
    let pizzaSize = 
    pizza1 = new Pizza (orderNumber, pizzaToppings, pizzaSize);   // Globally set variable pizza1
    orderNumber += 1;
    $("#pizza1NameOutput").text(pizza1Name);
    $("#pizza2NameOutput").text(pizza2Name);
    $("button.pizza1-buttons").show();
    $("#pizzaNameInputForm").hide();
    $("#newGame").show();
    $("#pizzaNameInputForm").trigger("reset");
  });

  function pizzaToppingArray (values passed from form){
    let pizzaToppings = []

  }


});

// User Interface Logic End
// index.html Key:

// form-pizza: id="pizza_picker_form"
// form-topping-redSauce: name="pizza_topping_redSauce" value="redSauce" id="pizza_topping_redSauce"
// form-topping-cheese: name="pizza_topping_cheese" value="cheese" id="pizza_topping_cheese"
// form-topping-pepperoni: name="pizza_topping_pepperoni" value="pepperoni" id="pizza_topping_pepperoni"
// form-topping-mushrooms: name="pizza_topping_mushrooms" value="mushrooms" id="pizza_topping_mushrooms"
// form-topping-onions: name="pizza_topping_onions" value="onions" id="pizza_topping_onions"
// form-topping-sausage: name="pizza_topping_sausage" value="sausage" id="pizza_topping_sausage"
// form-topping-bacon: name="pizza_topping_bacon" value="bacon" id="pizza_topping_bacon"
// form-topping-blackOlives: name="pizza_topping_blackOlives" value="blackOlives" id="pizza_topping_blackOlives"
// form-topping-greenPeppers: name="pizza_topping_greenPeppers" value="greenPeppers" id="pizza_topping_greenPeppers"
// form-topping-pineapple: name="pizza_topping_pineapple" value="pineapple" id="pizza_topping_pineapple"
// form-size-null: name="pizza_picker_size" id="pizza_size_null" value=""
// form-size-small: name="pizza_picker_size" id="pizza_size_small" value="small"
// form-size-medium: name="pizza_picker_size" id="pizza_size_medium" value="medium"
// form-size-large: name="pizza_picker_size" id="pizza_size_large" value="large"
// form-size-extraLarge: name="pizza_picker_size" id="pizza_size_extraLarge" value="extraLarge"
// form-button-submit: id="pizza_picker_form_submit_button"