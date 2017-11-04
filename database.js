DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Bottled Water', 'Food', 1.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Coke Zero 12pk', 'Food', 5.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('50 lb. Brown Rice', 'Food', 49.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('70 in. Smart T.V.', 'Electronics', 999.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Smart Phone X', 'Electronics', 1099.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Smart Phone Charger', 'Electronics', 3.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Steak', 'Food', 19.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Bread', 'Food', 2.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Pistachios', 'Food', 12.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Coffee', 'Food', 17.99, 100);