# Book Directory API (Node.js & Express)

This project is a simple **Book Directory API** built using **Node.js** and **Express.js**. It allows users to manage a collection of books by performing CRUD (Create, Read, Update, Delete) operations.

## Features

- 📚 **Get all books** in the directory
- ✏️ **Add a new book** with details like title, author, publisher, and ISBN
- 🔄 **Update an existing book** by ISBN
- 🗑️ **Delete a book** from the directory

---

## 📌 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/) (Optional for testing API requests)

### Steps to Run the Project
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-directory-api.git
   cd book-directory-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **API is now running on:**
   ```
   http://localhost:3000
   ```

---

## 📖 API Endpoints

### 1️⃣ Get All Books
**Endpoint:** `GET /books`
- Retrieves a list of all books in the directory.

### 2️⃣ Add a New Book
**Endpoint:** `POST /books`
- Adds a new book to the collection.
- **Required Fields:** `title`, `author`, `publisher`, `publishedDate`, `isbn`
- **Example Request:**
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publisher": "Scribner",
    "publishedDate": "1925-04-10",
    "isbn": "9780743273565"
  }
  ```

### 3️⃣ Update a Book
**Endpoint:** `PUT /books/:isbn`
- Updates book details using its `isbn`.
- **Example Request:**
  ```json
  {
    "title": "The Great Gatsby - Updated",
    "author": "F. Scott Fitzgerald",
    "publisher": "Scribner",
    "publishedDate": "1925-04-10",
    "isbn": "9780743273565"
  }
  ```

### 4️⃣ Delete a Book
**Endpoint:** `DELETE /books/:isbn`
- Removes a book from the collection.

---

## 🛠️ Useful Commands

| Command              | Description                          |
|----------------------|----------------------------------|
| `npm install`       | Install project dependencies     |
| `npm start`         | Start the server                |
| `npm run dev`       | Start in development mode (nodemon) |

----

## 📩 Contact
For any questions or issues, feel free to reach out!



Happy Coding! 🚀📚

