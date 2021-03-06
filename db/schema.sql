CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id int NOT null auto_increment,
    burger_name varchar(255) not null,
    devoured boolean default false,
    primary key (id)
);