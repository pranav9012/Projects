CREATE TABLE engineer (
	id serial primary key,
	name varchar(50) unique not null,
	designation varchar(50) not null
	);