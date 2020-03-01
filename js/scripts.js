var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// proceed button
$(document).ready(function(){
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1000;
       console.log(price);
     break;
     case "medium":
       price = 700;
       console.log("The price is "+price);
     break;
     case "small":
       price = 450;
       console.log(price);
     default:
       console.log("price");
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 500;
      break;
      case "Stuffed":
        crust_price = 350;
      break;
      case "Glutten-free":
        crust_price = 450;
      break;
      default:
        console.log("price");
    }
    let topping_value = ptopping.length*30;
    console.log("topping value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choice").hide();
      alert("Please select pizza size and crust");
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choice").slideDown();
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);

// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1000;
           console.log(price);
         break;
         case "medium":
           price = 700;
           console.log("The price is "+price);
         break;
         case "small":
           price = 450;
           console.log(price);
         default:
           console.log("price");
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 500;
          break;
          case "Stuffed":
            crust_price = 350;
          break;
          case "Glutten-free":
            crust_price = 450;
          break;
          default:
            console.log("price");
        }
        let topping_value = ptopping.length*30;
        console.log("topping value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);



    });
    // Checkout button
    $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown();
      $("#addedprice").slideDown();
      console.log("Your total bill is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".delivery").slideDown();
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryamount= checkoutTotal+200;
      console.log("You will pay sh. "+ deliveryamount +" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+ deliveryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+200;
      console.log("Final Bill is: "+deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+ location+ ". Prepare sh. "+ deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown();
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});

