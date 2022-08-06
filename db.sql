USE `investment_db`; -- choose a name for your db

CREATE TABLE clients(
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    balance DOUBLE NOT NULL
);

CREATE TABLE assets (
	id INT PRIMARY KEY AUTO_INCREMENT,
    price DOUBLE NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE purchases(
	client_id INT NOT NULL,
    asset_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (client_id)
		REFERENCES clients (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (asset_id)
		REFERENCES assets (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO clients (username, `password`, balance) VALUES
	("lucasdvilar", "senha123", 20),
  ("pselxp", "senha123", 30);

INSERT INTO assets (price, quantity) VALUES
	(2.86, 20),
  (3.20, 30);

INSERT INTO purchases (client_id, asset_id, quantity) VALUES
	(1, 1, 5),
  (2, 2, 8);
