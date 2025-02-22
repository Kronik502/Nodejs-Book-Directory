const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

const fetchBooks = async () => {
    const response = await fetch('/books');
    const books = await response.json();
    bookList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.publishedDate}) [ISBN: ${book.isbn}]`;
        bookList.appendChild(li);
    });
};

bookForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newBook = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        publishedDate: document.getElementById('publishedDate').value,
        isbn: document.getElementById('isbn').value,
    };

    await fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    });

    bookForm.reset();
    fetchBooks();
});


fetchBooks();
