const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 

let books = []; 


const validateBook = (book) => {
    const { title, author, publisher, publishedDate, isbn } = book;
    return title && author && publisher && publishedDate && isbn;
};

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.post('/books', (req, res) => {
    const newBook = req.body;

    if (!validateBook(newBook)) {
        return res.status(400).json({ error: 'Invalid book data' });
    }
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    const updatedBook = req.body;

    if (!validateBook(updatedBook)) {
        return res.status(400).json({ error: 'Invalid book data' });
    }

    const index = books.findIndex(b => b.isbn === isbn);
    if (index !== -1) {
        books[index] = updatedBook;
        res.status(200).json(updatedBook);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

app.delete('/books/:isbn', (req, res) => {
    const { isbn } = req.params;
    const index = books.findIndex(b => b.isbn === isbn);
    
    if (index !== -1) {
        books.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
