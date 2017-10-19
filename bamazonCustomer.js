//NPM mysql
var mysql = require("mysql");
//NPM inquirer
var inquirer = require("inquirer");


// *************************************************SQL CONNECTION***************************************************************************
//Connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("\nWELCOME TO BAMAZON!\n");
});

// *************************************************DISPLAY PRODUCTS FUNCTION*****************************************************************
  connection.query("SELECT * FROM Products", function(err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
           console.log("------------------------------------------------");
           console.log("Item ID: " + res[i].item_id);
           console.log("Product Name: " + res[i].product_name);
           console.log("Department Name: " + res[i].department_name);
           console.log("Price: $" + res[i].price);
     }

// *************************************************ASK QUESTIONS FUNCTION*********************************************************************
    inquirer
      .prompt([
      { 
        name: "product",
        type: "input",
        message: "Please enter the ID number of the item you would like to buy?",
      },
      {
        name: "units",
        type: "input",
        message: "Please eneter how many units would you like to buy?"
      }
      ])  
// *************************************************STOCK CHECK*********************************************************************************      
        .then(function (answer) {
            connection.query("SELECT stock_quanity FROM products WHERE ?", [{item_id: answer.product}], function(err, res) {
            if (err) throw err;
            // console.log(res);
            // If customer uses an Item ID not in inventory return message
            if(res[0] == undefined){
              console.log('Sorry We dont have an Item ID of "' +  answer.product + '"');
              connection.end(); // End Connection
            }
  
// *************************************************On Hand Stock vs Requested Stock & Stuck Update**********************************************
            //Grab customer units and compare to on hand units  
            else{
            var unitInStock = res[0].stock_quanity;
            //Customer units are more than on hand stock return message of current stock on hand
            if (unitInStock <= answer.units){
            console.log("We Only Have " +  unitInStock + " Units in Stock For Item ID: " + answer.product + ". Sorry We Cannot Place Order. \nOrder cancelled.");
            connection.end();
            }

            // If customer unit request is less than on hand stock
            if(unitInStock >= answer.units){

      
            // Update mySQL database and reduce inventory
            var inventoryUpdate = parseInt(unitInStock) - parseInt(answer.units); // ensure we have integers for subtraction & database
            connection.query("UPDATE products SET ? WHERE ?", [{stock_quanity: inventoryUpdate}, {item_id: answer.product}], function(err, res){
              if(err) throw err;
            });
// *************************************************Order Total**********************************************************************************
            //Customer total
            var orderTotal;
            connection.query("SELECT price FROM products WHERE ?", [{item_id: answer.product}], function(err, res){
               // console.log(res[0].price);
               var soldPrice = res[0].price;
               orderTotal = answer.units*soldPrice.toFixed(2);

               console.log("\nYour Order has been placed and will ship within 24hrs\n \nYour total is $" + orderTotal);
               connection.end(); //End connection 
          });

        }

      }

    });
      
  });

});
