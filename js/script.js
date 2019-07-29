//business ogic
var pizza ={
  size['large', 'medium', 'small'],
  flavours['peperoni', 'double-cheese', 'BBQ', 'huwaiian'],
  toppings['peperoni', 'MUSHROOM','MOZARELLA'],
  crust['CRISPY','STUFFED','GLUTEN','meaty']
}
function pizza(size,flavours,toppings,crust){
  this.size= size;
  this.flavours= flavours;
  this.toppings=toppings;
  this.crust=crust;
}
//user iterface logic
$(document).ready(function(){
  $(form#new-pizza).submit(function(event){
    event.preventDefault();
  })
}
