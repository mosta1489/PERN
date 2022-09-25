-- Active: 1664055100946@@127.0.0.1@5432@perntodo
CREATE DATABASE perntodo;



CREATE TABLE public.todo
(
    todo_id serial,
    description character varying(255),
    PRIMARY KEY (todo_id)
);
