/*    Project:  Hands-On Project 2-4
      Author: Philip Winter
      Date:   9-18-17
      Purpose:
*/ 

/*array storing products to display*/
var products = ["Basic Hardwood Flooring ($2.09 sq/ft)", "Deluxe Harwood Flooring ($3.60 sq/ft)" , "Premium Harwood Floring ($4.95 sq/ft)" ,
                "Basic 2mm Flooring Underlayment ($29.98 per roll)" , "Deluxe 2mm Flooring Underlayment ($39.98 per roll)" ,
                "Premium 3mm Flooring Underlayment ($54.99 per roll)"];

    /* create a matching array of the label elements*/
var labels = document.getElementsByTagName ("label");
    /* function to generate list from array */
function processProducts() {
  /*var listItem = "";*/
  for (var i = 0; i < 6; i++) {
    labels[i].innerHTML = products[i];
  }
}

if (window.addEventListener)  {
  window.addEventListener("load", processProducts);
} else if (window.attachEvent)  {
    window.attachEvent("onload", processProducts);
}

function calcTotal()
{
  var itemTotal = 0;
 
  var salesTaxRate = 0.06;
  var items = document.getElementsByTagName("input"); /*seeing if I can use a for loop*/
  for (var i = 0; i < 6; i++)
  {
    if (items[i].checked) 
    {
      itemTotal += (items[i].value * 1);
    }
    
  }
  var salesTax = itemTotal * salesTaxRate;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert ("Sub Total $" + itemTotal.toFixed(2) + /*this was needed to show the sub total*/
         "\nSales tax $" + salesTax.toFixed(2) + /*this was needed to show the tax*/
         "\nEstimated Cost $" + orderTotal.toFixed(2)); /*toFixed(2) writes out 2 decimals  and this shows the grand total*/
}

document.getElementById("submit").addEventListener("click", calcTotal); 