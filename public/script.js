/*    Project:  Hands-On Project 2-4
      Author: Philip Winter
      Date:   9-18-17
      Purpose:
*/ 

function calcTotal(){
  var itemTotal = 0;
  /*store the checkbox elements each to a corresponding variable that has access to all properties*/
  /*
  now calculate the sales total after computing tax*/
  
  var salesTaxRate = 0.06;
  var items = document.getElementsByTagName("input"); //seeing if I can use a for loop
  for (var i = 0; i < 7; i++){
    if (items[i].checked) 
    {
      itemTotal += (items[i].value * 1);
    }
    
  } 
  var salesTax = itemTotal * salesTaxRate;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert ("your sub total is $" + itemTotal.toFixed(2) + //this was needed to show the sub total
         "\nsales tax is $" + salesTax.toFixed(2) + //this was needed to show the tax
         "\nyour order total is $" + orderTotal.toFixed(2)); //toFixed(2) writes out 2 decimals  and this shows the grand total
}

document.getElementById("submit").addEventListener("click", calcTotal);