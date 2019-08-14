-- Drops burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create database burgers_db and specify for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(250) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);