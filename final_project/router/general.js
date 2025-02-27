const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
 const axios = require('axios');

public_users.get('/isbn/:isbn', async function (req, res) {
    try {
        const isbn = req.params.isbn;
        const response = await axios.get(`https://5000/books/${isbn}`);
        const bookDetails = response.data;
        res.send(JSON.stringify(bookDetails, null, 2));
    } catch (error) {
        res.status(500).send('Error retrieving book details');
    }
});
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const axios = require('axios');

    public_users.get('/isbn/:isbn', async function (req, res) {
      const isbn = req.params.isbn;
      try {
        const response = await axios.get(`https://5000/books/${isbn}`);
        const bookDetails = response.data;
        res.json(bookDetails);
      } catch (error) {
        res.status(500).send('Error retrieving book details');
      }
    });
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const books = [
        { title: 'Book 1', author: 'Author A' },
        { title: 'Book 2', author: 'Author B' },
        // Add more books as needed
      ];
      
      public_users.get('/author/:author', function (req, res) {
        const author = req.params.author;
        const booksByAuthor = books.filter(book => book.author === author);
        if (booksByAuthor.length > 0) {
          res.json(booksByAuthor);
        } else {
          res.status(404).send('No books found by this author');
        }
      });  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    public_users.get('/title/:title', function (req, res) {
        const title = req.params.title;
        const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());
    
        if (book) {
            res.json(book);
        } else {
            res.status(404).send('Book not found');
        }
    });  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    public_users.get('/review/:isbn', function (req, res) {
        const isbn = req.params.isbn;
        const book = books.find(b => b.isbn === isbn);
    
        if (book) {
            res.json(book.reviews);
        } else {
            res.status(404).send('Book not found');
        }
    });
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
