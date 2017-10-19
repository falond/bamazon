-- Database
CREATE DATABASE bamazon;

USE bamazon;


--Table
CREATE TABLE products (
  item_id int(11) NOT NULL AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_name varchar(50) NOT NULL,
  price double(19,2) NOT NULL,
  stock_quanity int(11) NOT NULL,
  PRIMARY KEY (item_id)
)


--Input of item to database
INSERT INTO products(product_name, department_name, price, stock_quanity)
VALUES ("GOPRO HERO5", "Electronics", 399.00, 25),
  ("Diamondback Bicycle", "Sports & Outdoors", 220.00, 15),
  ("Basic Tent", "Outdoors", 54.99, 100),
  ("Spalding NBA Street Basketball", "Sports", 14.99, 150),
  ("Crosley Record Player", "Music", 73.77, 48),
  ("TCL 32-Inch TV", "Entertainment", 169.99, 300),
  ("Echo Dot", "Electronics", 49.99, 247),
  ("FIFA 18 PS3", "Games", 59.88, 30),
  ("Kayak", "Sports & Outdoors", 784.49, 30),
  ("Snowboard", "Sports & Outdoors", 199.99, 13);

