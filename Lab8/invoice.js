/*
Invoice product sales data
*/
//product quantities lab 8 part 2.1
product_quantities = [2,1,1,3,12];

//alert box lab 8 part 2.2
//alert("The size of the products array is: "+product_quantities.length);

//lab 8 part 2.3
//product_quantities.push(3);
//product_quantities.pop();

// Product Data
// Product 1
let item1 = 'Gillette Sensor 3 Razor';
let quantity1 = 2;
let price1 = 1.23;

// Product 2
let item2 = 'Barbasol Shaving Cream';
let quantity2 = product_quantities[1];
let price2 = 2.64;

// Product 3
let item3 = 'Nautica Cologne';
let quantity3 = product_quantities[2];
let price3 = 6.17;

// Product 4
let item4 = 'Rubbing Alcohol';
let quantity4 = product_quantities[3];
let price4 = 0.98;

// Product 5
let item5 = 'Colgate Classic Toothbrush';
let quantity5 = product_quantities[4];
let price5 = 1.89;

//product1 from Lab 8
let product1 = {
    itemName: 'iPhone 12',
    quantity: product_quantities[0],
    price: 247.95
};

//product1.quantity = 0;
//product1["SKU#"] = 1234;
//delete product1["SKU#"];

//extended price for product1
let extended_price1 = product1.quantity * product1.price;


// Compute extended prices
//let extended_price1 = quantity1 * price1;
let extended_price2 = quantity2 * price2;
let extended_price3 = quantity3 * price3;
let extended_price4 = quantity4 * price4;
let extended_price5 = quantity5 * price5;

//Overall Subtotal 
let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

//Tax Rate
let tax_rate = 0.0575;
let tax = tax_rate * subtotal;

//Grand Total 
let grand_total = tax + subtotal

//BODY
let table = document.getElementById('invoiceTable');
// item row 1
let row = table.insertRow(); 
row.insertCell(0).innerHTML = `${product1.itemName}`;
row.insertCell(1).innerHTML = `${product1.quantity}`;
row.insertCell(2).innerHTML = '$' + `${product1.price}`;
row.insertCell(3).innerHTML = '$' + `${extended_price1.toFixed(2)}`;
// item row 2
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item2}`;
row.insertCell(1).innerHTML = `${quantity2}`;
row.insertCell(2).innerHTML = '$' + `${price2.toFixed(2)}`;
row.insertCell(3).innerHTML = '$' + `${extended_price2}`;
// item row 3
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item3}`;
row.insertCell(1).innerHTML = `${quantity3}`;
row.insertCell(2).innerHTML = '$' + `${price3.toFixed(2)}`;
row.insertCell(3).innerHTML = '$' + `${extended_price3}`;
// item row 4
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item4}`;
row.insertCell(1).innerHTML = `${quantity4}`;
row.insertCell(2).innerHTML = '$' + `${price4.toFixed(2)}`;
row.insertCell(3).innerHTML = '$' + `${extended_price4}`;
// item row 5
row = table.insertRow(); 
row.insertCell(0).innerHTML = `${item5}`;
row.insertCell(1).innerHTML = `${quantity5}`;
row.insertCell(2).innerHTML = '$' + `${price5.toFixed(2)}`;
row.insertCell(3).innerHTML = '$' + `${extended_price5}`;

//Subtotal, Tax, and Grand Total
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('grandtotal_cell').innerHTML = '$' + grand_total.toFixed(2);