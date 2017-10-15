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
       // console.log("Item ID: " + res[i].item_id + " | " + 
       //  "Product Name: " + res[i].product_name + " | " + 
       //  "Department Name: " + res[i].department_name + " | " + 
       //  "Price: $" + res[i].price);
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
      name: "products",
      type: "input",
      message: "Please enter the ID number of the item you would like to buy?",
    },
    {
      name: "units",
      type: "input",
      message: "Please eneter how many units would you like to buy?"
    }  
    ]).then(function(answer) {
      connection.query(
        "UPDATE INTO products SET ? WHERE ?",
        [
              {
                stock_quanity: answer.units
              },
              {
                item_id: answer.products
              }
        ],
        function(err) {
          if (err) throw err;
          console.log("Your auction was created successfully!");
          // re-prompt the user for if they want to bid or post
          displayProducts();
        }
      );
    });
}