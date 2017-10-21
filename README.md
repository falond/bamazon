# Bamazon

### Overview
A Node.js &amp; MySQL digital storefront. This is a command line Node app that mimics an Amazon-like storefront.

### Node.js
This JavaScript file runs the basics of placing an order:

- `bamazonCustomer.js` _([See example here](#customer))_
  - Receives orders from customers via the command line and interfaces with mySQL to deplete stock from the store's inventory.



### MySQL
The JavaScript file mentioned above query a MySQL database called `bamazon` Its locally hosted.

- Please view the `schema.sql` file to see how the database was created using SQL queries.

 - If you want to run this app on your own computer, please use the following commands:


    1. Run `CREATE DATABASE bamazon;` in mySQL.
    2. Make sure to select the correct database by running the `USE bamazon;
    3. In `schema.sql` file refer to the SQL commands under the _`--Table`_ comment to set up the `products` table.
    4. In `schema.sql` file refer to the SQL commands under the _`--Input of items to database`_ comment to input the `Data` for the table.

### Node Packages- npm
Please note that this repo has two npm dependencies.
Before running the JavaScript file mentioned above, please run `npm install` in your terminal to download the [prompt](https://www.npmjs.com/package/prompt) and [mysql](https://www.npmjs.com/package/mysql) node packages.

### Screenshots
Below are screenshots that capture the app functionality.

<a name="customer"></a>
- Run `node BamazonCustomer.js` in your terminal. This will pull data from MySQL and show all the products for sale.
    - The customer can then enter the product ID number of the item they wish to buy. 
    Once the customer enters the ID they can then enter the qty they wish to buy.
      ![Customer Order](/screenshot_images/bamazonCustomer_example_1.png)
    - If the inventory has enough stock, the order will then be processed.
      ![Order Valid](/screenshot_images/bamazonCustomer_example_2.png)
    - If there's not enough invenotry to fufill their order, the customer will then see a message with the current stock and be notified that their order is now canceled.
      ![Order Invalid](/screenshot_images/bamazonCustomer_example_3.png)


### Future Enhancements 

- `BamazonManager.js`
  - This will act as a warehouse management system. Which will allow a manager to view stock and adjust inventory in a few different ways.

- `BamazonExecutive.js`
  - This will offer insight into profit and sales from the bamazon store.


