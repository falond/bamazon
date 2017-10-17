//NPM mysql
var mysql = require("mysql");
//NPM inquirer
var inquirer = require("inquirer");
//Takes all command lines arguments
var inputString = process.argv;
var command = inputString[2];



// *************************************************SQL CONNECTION**********************************************
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
  displayProducts();
});

// *************************************************DISPLAY PRODUCTS FUNCTION**********************************************
 function displayProducts() {
  connection.query("SELECT item_id, product_name, department_name, price, stock_quanity FROM products", function(err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
           console.log("------------------------------------------------");
           console.log("Item ID: " + res[i].item_id);
           console.log("Product Name: " + res[i].product_name);
           console.log("Department Name: " + res[i].department_name);
           console.log("Price: $" + res[i].price);
     }

    connection.end();
    askQuestions();
  });
}
// *************************************************ASK QUESTIONS FUNCTION**********************************************
function askQuestions() {
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
    ]).then(function (answer) {
        connection.query("SELECT item_id, product_name, department_name, price, stock_quanity FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);


        });
      });
}































 // .then(function (answer) {

 //   // console.log("Buy: Item " + answer.productId + "\nUnits: " + answer.orderQuantity);

 //   // Check if store has enough of the product to fill the customer's request.
 //    var query = "SELECT stock_quantity FROM products WHERE ?";
 //    connection.query(query, { item_id: answer.productId }, function(err, res) {

 //     // console.log(res[0].stock_quantity);

 //     if ( res[0].stock_quantity < answer.orderQuantity ) {

 //       console.log("Insufficient product in stock to fill this order.");

 //     }
 //      else {

 //       console.log("We can fill this order.");
 //        console.log("Product ordered :" + answer.productId + "\nQuantity ordered: " + answer.orderQuantity);

 //       fillCustomerOrder(answer.productId, answer.orderQuantity);

 //     }
 //    });
 //  });











//     ]).then(function(answer) {
//       var qty = answers.units
//       var id = answers.products 

//       var chosenId;
//         for (var i = 0; i < results.length; i++) {
//           if (results[i].item_id === id) {
//             chosenId = results[i];
//           }
//         }
//       connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//               {
//                 stock_quanity: answer.units
//               },
//               {
//                 item_id: answer.products
//               }
//         ],
//         function(err) {
//           if (err) throw err;
//           console.log("Your auction was created successfully!");
//           // re-prompt the user for if they want to bid or post
//           displayProducts();
//         }
//       );
//     });
// }

