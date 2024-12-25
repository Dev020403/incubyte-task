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

});
