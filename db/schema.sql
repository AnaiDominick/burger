-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "todolist" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE 'burgers' (
'id' Int( 11 ) AUTO_INCREMENT NOT NULL,
'burger_name' varchar(255) NULL,
'devoured' boolean,
 PRIMARY KEY ( 'id' )
);

SELECT * FROM burgers;