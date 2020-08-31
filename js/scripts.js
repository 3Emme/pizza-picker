// Business Logic Start
function Pizza(orderNumber, pizzaToppings, pizzaSize) {
  this.orderNumber = orderNumber;
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
  this.price = 5
}
Pizza.prototype.cost = function () {
  if (this.size === "Medium"){
    this.price += 2;
  } else if (this.size === "Large"){
    this.price += 4;
  } else if (this.size === "Extra large"){
    this.price += 6;
  };
  if (this.toppings.length >= 3 && this.toppings.length <= 6 ){
    this.price += 2;
  } else if (this.toppings.length > 6){
    this.price += 4;
  }
};
// Business Logic End
// User Interface Logic Start
$(document).ready(function() {
let orderNumber = 0
  $("form#pizza_picker_form").submit(function(event) {
    event.preventDefault();
    let pizzaToppingInputs = $("input:checkbox[name=pizza_toppings]:checked");
    let pizzaToppings = pizzaToppingArray(pizzaToppingInputs);
    let pizzaSize = $("input:radio[name=pizza_size]:checked").val();
    if(pizzaToppingInputs.length == 0)
    {
        alert("Please select at least 1 topping for your pizza. Otherwise it's just triangle shaped breadsticks.");
        return false;
    } if(pizzaSize == "")
    {
        alert("Please select a size for your pizza");
        return false;
    }
    pizza1 = new Pizza (orderNumber, pizzaToppings, pizzaSize);
    pizza1.cost();
    orderNumber += 1;
    let toppingsAsAString = Object.values(pizza1.toppings).join(', ');
    $("#pizza_display").show();
    $("#pizza_display_orderNumber").text(pizza1.orderNumber);
    $("#pizza_display_toppings").text(toppingsAsAString);
    $("#pizza_display_size").text(pizza1.size);
    $("#pizza_display_price").text("$" + pizza1.price + ".00");
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