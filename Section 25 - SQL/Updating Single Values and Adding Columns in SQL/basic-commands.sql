-- Updating a record (Don't forget the WHERE, otherwise you woud fuck it all)
    UPDATE "products"
    SET price = 0.80
    WHERE id = 2


-- Modifications on the table (adding a new column)
    ALTER TABLE products
    ADD stock INT

-- CHALLENGE
    UPDATE "products"
    SET stock = 32
    WHERE id = 1

    UPDATE "products"
    SET stock = 12
    WHERE id = 2
