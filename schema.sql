create table users (
    id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    email varchar(100),
    user_password varchar(200)
);

create table recipes (
    id serial primary key,
    recipe_title varchar(300),
    recipe_added_date date,
    recipe_details text,
    recipe_photo text,
    user_id integer references users(id)
);