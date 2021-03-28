#!/bin/bash
read -p "Enter host: " host
read -p "Enter port: " port
read -p "Enter database: " database
read -p "Enter username: " user

mysql -h $host -P $port -u $user -p <<QUERY
USE ${database};
CREATE TABLE IF NOT EXISTS unique_links (
    id INT NOT NULL AUTO_INCREMENT,
    participant VARCHAR(50) NOT NULL,
    link VARCHAR(8) NOT NULL UNIQUE,
    expiresAt DATETIME,
    status TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);
QUERY