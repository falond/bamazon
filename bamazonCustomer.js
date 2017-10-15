//NPM mysql
var mysql = require("mysql");
//NPM inquirer
var inquirer = require("inquirer");
//Takes all command lines arguments
var inputString = process.argv;
var command = inputString[2];
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
  runSearch();
});

function askQuestions() {
  inquirer
    .prompt({
      name: "products",
      type: "list",
      message: "What would you like to buy?",
      choices: [
        "GOPRO HERO5",
        "Diamondback Bicycle",
        "Basic Tent",
        "Spalding NBA Street Basketball", 
        "Crosley Record Player",
        "TCL 32-Inch TV",
        "Echo Dot",
        "FIFA 18 PS3",
        "Kayak",
        "Snowboard"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;
      }
    });
}