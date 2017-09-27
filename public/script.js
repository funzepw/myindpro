/*    Project:  Hands-On Project 2-4
      Author: Philip Winter
      Date:   9-18-17
      Purpose:
*/ 

function calcTotal(){
  var itemTotal = 0;
  //store the checkbox elements each to a corresponding variable that has access to all properties
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  var item6 = document.getElementById("item6");
  //now that you have the variables, check the ".checked" property to see if selected
  (item1.checked) ? (itemTotal += 378.42) : (itemTotal += 0);
  (item2.checked) ? (itemTotal += 473.82) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 537.42) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 103.35) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 141.51) : (itemTotal += 0);
  (item6.checked) ? (itemTotal += 165.36) : (itemTotal += 0);
  //now calculate the sales total after computing tax
  var salesTaxRate = 0.06;
  var salesTax = itemTotal * salesTaxRate;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert ("your sub total is $" + itemTotal.toFixed(2) + //this was needed to show the sub total
         "\nsales tax is $" + salesTax.toFixed(2) + //this was needed to show the tax
         "\nyour order total is $" + orderTotal.toFixed(2)); //toFixed(2) writes out 2 decimals  and this shows the grand total
}

document.getElementById("submit").addEventListener("click", calcTotal);