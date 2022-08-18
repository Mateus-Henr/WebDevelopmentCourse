-- CRUD Operations
--
--   C - Create
--   R - Read
--   U - Update
--   D - Delete


-- Symbols
--   * - All

-- Primary key
-- Allows a particular column to uniquely identify each of its records.


-- Creating table (schema)
    CREATE TABLE products
    (
      id INT NOT NULL,
      name STRING,
      price MONEY,
      PRIMARY KEY (id)
    )


-- Adding data into the table
    INSERT INTO products
    VALUES (1, "Pen", 1.20)


-- Inserting without all values
    INSERT INTO products (id, name)
    VALUES (2, "Pencil")
