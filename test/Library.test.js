const Book = require('../src/Book');
const Library = require('../src/Library');

describe('Library Service', () => {
    let library;

    // Initialize a new library before each test
    beforeEach(() => {
        library = new Library();
    });

    // addBook method testing
    describe('addBook method', () => {
        // Test adding a new book to the library
        it('should add a new book to the library', () => {
            const book1 = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2023);
            const book2 = new Book('2', 'Advanced JavaScript', 'Dev Kapadia', 2024);

            library.addBook(book1);
            expect(library.books.length).toBe(1);
            expect(library.books[0]).toEqual(book1);

            library.addBook(book2);
            expect(library.books.length).toBe(2);
            expect(library.books[1]).toEqual(book2);
        });

        // Test throwing an error when adding a book with a duplicate ISBN
        it('should throw an error when adding a book with a duplicate ISBN', () => {
            const book1 = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2024);
            const book2 = new Book('1', 'Advanced JavaScript', 'John Doe', 2023);

            library.addBook(book1);
            expect(() => library.addBook(book2)).toThrow('A book with this ISBN already exists');
        });
    });
    // borrowBook method testing
    describe('borrowBook method', () => {
        // Test successfully borrowing a book if it is available
        it('should allow borrowing a book if it is available', () => {
            const book = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2024);
            library.addBook(book);
            library.borrowBook('1');
            expect(library.books[0].isAvailable).toBe(false);
        });

        // Test throwing an error if the book is not available
        it('should throw an error if the book is not available', () => {
            const book = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2024);
            library.addBook(book);
            library.borrowBook('1');
            expect(() => library.borrowBook('1')).toThrow('Book is not available');
        });
    });
    // Return book method testing
    describe('returnBook method', () => {
        // Test successfully returning a book if it is borrowed
        it('should allow returning a book if it is borrowed', () => {
            const book = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2024);
            library.addBook(book);
            library.borrowBook('1');
            library.returnBook('1');
            expect(library.books[0].isAvailable).toBe(true);
        });

        // Test throwing an error if the book is not borrowed
        it('should throw an error if the book is not borrowed', () => {
            const book = new Book('1', 'JavaScript Basics', 'Dev Kapadia', 2024);
            library.addBook(book);
            expect(() => library.returnBook('1')).toThrow('Book is not borrowed');
        });

        // Test throwing an error if the book is not found
        it('should throw an error if the book is not found', () => {
            expect(() => library.returnBook('nonexistent-isbn')).toThrow('Book not found');
        });
    });
});
