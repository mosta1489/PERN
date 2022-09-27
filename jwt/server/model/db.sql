-- Active: 1664303001361@@127.0.0.1@5432@jwt@public
CREATE DATABASE jwt
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE extension if not EXISTS "uuid-ossp";

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT UUID_GENERATE_V4 () ,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL );

INSERT INTO users (user_name, user_email, user_password)
    VALUES ('mostafa', 'mostafa148999@gmail.com', 'mosta1489');


SELECT * FROM users

