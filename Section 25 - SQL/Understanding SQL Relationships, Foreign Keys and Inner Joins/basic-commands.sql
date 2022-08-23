-- Challenge
    INSERT INTO "products"
    VALUES (2, "Pencil", 0.80, 12)


-- Foreign Key
-- This is the key that links two tables together.


-- Creating new table to show relationships
    CREATE TABLE orders
    (
      id INT NOT NULL,
      order_number INT,
      customer_id INT, -- Foreign key to our table, points to another table.
      product_id INT,
      PRIMARY KEY id,
      FOREIGN KEY (customer_id) REFERENCES customers(id),
      FOREIGN KEY (products_id) REFERENCES products(id)
    )


-- Creating data for the table above
    INSERT INTO orders
    VALUES (1, 4362, 2, 1)


-- Joining tables together (INNER JOIN - Intersetion between two tables)
    SELECT orders.order_number, customers.first_name,
           customers.last_name, customers.address
    FROM orders
    INNER JOIN customers ON orders.customer_id = customers.id


-- Challenge
  SELECT orders.order_number, products.name,
         products.price, products.stock
  FROM orders
  INNER JOIN products ON orders.products_id = products.id
