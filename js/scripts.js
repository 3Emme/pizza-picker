// Business Logic Start

// Constructor function for a pizza
function Pizza(orderNumber, pizzaToppings, pizzaSize) {
  //this.customerName = customerName; ^^tbi add also new parameter for customerName above
  this.orderNumber = orderNumber;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
  this.price = 5
}

Pizza.prototype.cost = function () {
  if (this.pizzaSize = "Medium"){
    this.price += 2;
  }else if (this.pizzaSize = "Large"){
    this.price += 4;
  } else if (this.pizzaSize = "Extra large"){
    this.price += 6;
  }
  if (this.toppings.length >= 3 || this.toppings.length <= 6 ){
    this.price += 2;
  } else if (this.toppings.length > 6){
    this.price += 4;
  }
  console.log("price check!" + this.price);
};

// Business Logic End
// User Interface Logic Start

$(document).ready(function() {
let orderNumber = 0
// function for pizza submission
  $("form#pizza_picker_form").submit(function(event) {
    event.preventDefault();
    // const pizza1Name = $("input#pizza1NameInput").val();
    // console.log("pizza1Name: " + pizza1Name);
    let pizzaToppingInputs = $("input:checkbox[name=pizza_toppings]:checked");
    let pizzaToppings = pizzaToppingArray(pizzaToppingInputs);
    console.log("pizzaToppings: " + pizzaToppings);
    let pizzaSize = $("input:radio[name=pizza_size]:checked").val();
    console.log("pizzaSize: " + $("input:radio[name=pizza_size]:checked").val());
    pizza1 = new Pizza (orderNumber, pizzaToppings, pizzaSize);   // Globally set variable pizza1
    console.log("pizza1: " + Object.values(pizza1));
    pizza1.cost();
    console.log("orderNumber is first:" + orderNumber);
    orderNumber += 1;
    let toppingsAsAString = Object.values(pizza1.toppings).join(', ');
    console.log("orderNumber is then:" + orderNumber);
    $("#pizza_display").show();
    $("#pizza_display_orderNumber").text(pizza1.orderNumber);
    $("#pizza_display_toppings").text(toppingsAsAString);
    $("#pizza_display_size").text(pizza1.size);
    $("#pizza_display_price").text(pizza1.price);
    $("#pizza_picker_form").trigger("reset");
  });

  function pizzaToppingArray (pizzaToppingInputs){
    let pizzaToppings = []
    pizzaToppingInputs.each(function(){
      pizzaToppings.push($(this).val());
    });
    return pizzaToppings;
  }
});

// User Interface Logic End
// index.html Key:

// form-pizza: id="pizza_picker_form"
// form-topping-redSauce: name="pizza_toppings" value="redSauce" id="pizza_topping_redSauce"
// form-topping-cheese: name="pizza_toppings" value="cheese" id="pizza_topping_cheese"
// form-topping-pepperoni: name="pizza_toppings" value="pepperoni" id="pizza_topping_pepperoni"
// form-topping-mushrooms: name="pizza_toppings" value="mushrooms" id="pizza_topping_mushrooms"
// form-topping-onions: name="pizza_toppings" value="onions" id="pizza_topping_onions"
// form-topping-sausage: name="pizza_toppings" value="sausage" id="pizza_topping_sausage"
// form-topping-bacon: name="pizza_toppings" value="bacon" id="pizza_topping_bacon"
// form-topping-blackOlives: name="pizza_toppings" value="blackOlives" id="pizza_topping_blackOlives"
// form-topping-greenPeppers: name="pizza_toppings" value="greenPeppers" id="pizza_topping_greenPeppers"
// form-topping-pineapple: name="pizza_toppings" value="pineapple" id="pizza_topping_pineapple"
// form-size-null: name="pizza_size" id="pizza_size_null" value=""
// form-size-small: name="pizza_size" id="pizza_size_small" value="small"
// form-size-medium: name="pizza_size" id="pizza_size_medium" value="medium"
// form-size-large: name="pizza_size" id="pizza_size_large" value="large"
// form-size-extraLarge: name="pizza_size" id="pizza_size_extraLarge" value="extraLarge"
// form-button-submit: id="pizza_picker_form_submit_button"