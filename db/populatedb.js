#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config()

const SQL = `
CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    publication_date DATE,
    publisher VARCHAR(100),
    page_count INTEGER,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for Books and Authors (many-to-many)
CREATE TABLE book_authors (
    book_id INTEGER REFERENCES books(book_id) ON DELETE CASCADE,
    author_id INTEGER REFERENCES authors(author_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);

-- Junction table for Books and Genres (many-to-many)
CREATE TABLE book_genres (
    book_id INTEGER REFERENCES books(book_id) ON DELETE CASCADE,
    genre_id INTEGER REFERENCES genres(genre_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, genre_id)
);

-- Insert sample authors
INSERT INTO authors (name, bio, birth_date) VALUES 
('J.K. Rowling', 'British author best known for Harry Potter series', '1965-07-31'),
('George R.R. Martin', 'American novelist best known for A Song of Ice and Fire', '1948-09-20'),
('Agatha Christie', 'English writer known for detective novels', '1890-09-15');

-- Insert sample genres
INSERT INTO genres (name, description) VALUES 
('Fantasy', 'Imaginary worlds and magical elements'),
('Mystery', 'Stories that involve solving a crime or puzzle'),
('Adventure', 'Exciting, risky experiences'),
('Horror', 'Intended to scare or frighten');

-- Insert sample books
INSERT INTO books (title, isbn, publication_date, publisher, page_count, description) VALUES
('Harry Potter and the Philosopher''s Stone', '9780747532743', '1997-06-26', 'Bloomsbury', 223, 'The first book in the Harry Potter series'),
('A Game of Thrones', '9780553103540', '1996-08-01', 'Bantam Spectra', 694, 'The first book in A Song of Ice and Fire series'),
('Murder on the Orient Express', '9780007119318', '1934-01-01', 'Collins Crime Club', 256, 'A detective novel featuring Hercule Poirot');

-- Link books to authors
INSERT INTO book_authors (book_id, author_id) VALUES
(1, 1), -- Harry Potter by J.K. Rowling
(2, 2), -- Game of Thrones by George R.R. Martin
(3, 3); -- Murder on the Orient Express by Agatha Christie

-- Link books to genres
INSERT INTO book_genres (book_id, genre_id) VALUES
(1, 1), -- Harry Potter is Fantasy
(1, 3), -- Harry Potter is also Adventure
(2, 1), -- Game of Thrones is Fantasy
(2, 3), -- Game of Thrones is also Adventure
(3, 2), -- Murder on the Orient Express is Mystery
(3, 4); -- Murder on the Orient Express is also Horror
`;

async function main() {
  try {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  catch (error) {
    console.error(error)
  }

}

main();