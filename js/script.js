//business ogic
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

    var pizaSize = $("#pizza-size option:selected").val();
    var pizaFlavour =$("#pizza-type option:selected").val();
    var pizatop =$("#pizza-toppings option:selected").val();
    var pizaCrust = $("#pizza-crust option:selected").val();

    var newPizza=newPizza(pizaSize, pizaFlavour, pizatop, pizaCrust);
  })

}
