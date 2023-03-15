-- users table
    CREATE TABLE users (
      id              INT               PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
      email           VARCHAR(100) not null,      
      password        VARCHAR(50) not null,
      created_at date default CURRENT_DATE
    );