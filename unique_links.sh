#!/bin/bash
read -p "Enter host: " host
read -p "Enter port: " port
read -p "Enter database: " database
read -p "Enter username: " user

mysql -h $host -P $port -u $user -p <<QUERY
USE ${database};
CREATE TABLE IF NOT EXISTS unique_links (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    unique_identifier VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    link VARCHAR(8) NOT NULL UNIQUE,
    expiresAt DATETIME,
    status TINYINT NOT NULL DEFAULT 0,
    file VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
QUERY