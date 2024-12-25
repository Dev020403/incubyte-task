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
}

module.exports = LibraryService;