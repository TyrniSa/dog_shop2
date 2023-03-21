-- Table: products
CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    price numeric NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    sex character varying(50) COLLATE pg_catalog."default",
    age character varying(50) COLLATE pg_catalog."default",
    img character varying(200) COLLATE pg_catalog."default"
);

-- Table: users
CREATE TABLE IF NOT EXISTS public.users
(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at date DEFAULT 'CURRENT_DATE',
    CONSTRAINT users_email_key UNIQUE (email)
);

-- Table: carts
CREATE TABLE carts(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    userid integer NOT NULL,
    created_at date DEFAULT 'CURRENT_DATE',
    FOREIGN KEY (userid) REFERENCES users (id)
);

-- Table: cartitems
CREATE TABLE cartitems (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    cartid integer NOT NULL,
    productid integer NOT NULL,
    qty integer NOT NULL,
    FOREIGN KEY (cartid) REFERENCES carts (id),
    FOREIGN KEY (productid) REFERENCES products (id)
);

-- Table: orders
CREATE TABLE orders(
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY NOT NULL,
    total numeric NOT NULL,
    status character varying(50) COLLATE pg_catalog."default" DEFAULT 'PENDING'::character varying,
    userid integer NOT NULL,
    created_at date DEFAULT 'CURRENT_DATE',
    FOREIGN KEY (userid) REFERENCES users (id)
);
