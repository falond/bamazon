# Bamazon

### Overview
A Node.js &amp; MySQL digital storefront. This is a command line Node app that mimics an Amazon-like storefront.

### Node.js
This JavaScript file replicate the basics of placing an order:

- `bamazonCustomer.js` _([See example here](#customer))_
  - Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.



### MySQL
The JavaScript files mentioned above query a MySQL database called `Bamazon` Its is locally hosted.

- Please view the `schema.sql` file to see how the database was created using SQL queries.

 - If you want to run this app on your own computer, please us the following commands:


    1. Run `CREATE DATABASE bamazon;` in mySQL Workbench.
    2. Be sure to select the correct database by running the `USE bamazon;
    3. Refer to the SQL commands under the _`--Table`_ comment to set up the `products` table.
    4. Refer to the SQL commands under the _`--Input of items to database`_ comment to input the `Data` for the table.

### Node Packages- npm
Please note that this repo has two npm dependencies.
Before running the JavaScript file mentioned above, please run `npm install` in your terminal to download the [prompt](https://www.npmjs.com/package/prompt) and [mysql](https://www.npmjs.com/package/mysql) node packages.

### Screenshots
Below are screenshots that capture the app functionality.

