const Book = require('../src/Book');

describe('Book Model', () => {
    //book is created successfully
    it('should create a book with the given properties', () => {
        const book = new Book('1', 'JavaScript', 'Dev Kapadia', 2024);
        expect(book.isbn).toBe('1');
        expect(book.title).toBe('JavaScript');
        expect(book.author).toBe('Dev Kapadia');
        expect(book.year).toBe(2024);
        expect(book.isAvailable).toBe(true);
    });

    //book is not created if any of the property is missing
    it('should throw an error if title is missing', () => {
        expect(() => new Book('1', 'javascript', 'Dev Kapadia', null)).toThrow('All parameters (isbn, title, author, year) are required');
    });
});