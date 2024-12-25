class Book {
    constructor(isbn, title, author, year) {
        //throws error if any of the parameters is missing
        if (!isbn || !title || !author || !year) {
            throw new Error('All parameters (isbn, title, author, year) are required');
        }
        //initializes the book 
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
}

module.exports = Book;