const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) getBookTitle
function getBookTitle(bookId) {
  const book = books.find(book => book.id === bookId);
  return book ? book.title : 'Book not found';
}

console.log(getBookTitle(3)); // Output: '1984'

// b) getOldBooks
function getOldBooks() {
  const currentYear = new Date().getFullYear();
  return books.filter(book => book.year < 1950);
}

console.log(getOldBooks());

// c) addGenre
function addGenre() {
  return books.map(book => ({ ...book, genre: 'classic' }));
}

console.log(addGenre());
// d) getTitles
function getTitles(authorInitial) {
  return books
    .filter(book => book.author.startsWith(authorInitial))
    .map(book => book.title);
}

console.log(getTitles('F')); // Output: [ 'The Great Gatsby' ]

// e) latestBook
function latestBook() {
  let latest = books[0];
  books.forEach(book => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(latestBook());