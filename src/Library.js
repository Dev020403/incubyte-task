class LibraryService {
    // Initialize the library with an empty array of books
    constructor() {
        this.books = [];
    }
    // Add a new book to the library
    addBook(book) {
        // Check if a book with the same ISBN already exists
        const existingBook = this.books.find(b => b.isbn === book.isbn);
        if (existingBook) {
            throw new Error('A book with this ISBN already exists');
        }
        this.books.push(book);
    }
    // Borrow a book from the library
    borrowBook(isbn) {
        //Check if a book with the given ISBN exists and is available
        const book = this.books.find(b => b.isbn === isbn);
        if (!book || !book.isAvailable) {
            throw new Error('Book is not available');
        }
        book.isAvailable = false;
    }
}

module.exports = LibraryService;