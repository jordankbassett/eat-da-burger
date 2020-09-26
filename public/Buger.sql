CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burgers(
id int NOT NULL auto_increment,
burger_name varchar(255) NOT NULL,
devoured BOOL default false,
primary key(id)
);

insert into burgers (burger_name, devoured) values ('Cheeseburger', false);
insert into burgers (burger_name, devoured) values ('Hamburger', false);
insert into burgers (burger_name, devoured) values ('Bisonburger', false);
insert into burgers (burger_name, devoured) values ('Swissburger', false);