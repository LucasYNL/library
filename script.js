let myLibrary = [];

function book(authorName, bookName, pageNum, didRead){ // book constructor
    this.author = authorName;
    this.title = bookName;
    this.pages = pageNum;
    this.read = didRead;
}

function addBook(){ // asks user for new book information and adds it to library.
    let authorName = prompt("Enter author name");
    let bookName = prompt("Enter book title");
    let pageNum = prompt("Enter total page numer");
    let didRead = prompt("Is the book read, enter true of false");

    const Book = new book(authorName, bookName, pageNum, didRead);
    myLibrary.push(Book);

}

function preadd(){ // just to add 2 books to array.
    let done = false;
    if(done == false){
        const Book = new book("David", "Star Fights", 300, false);
        myLibrary.push(Book);
    }
    const Book = new book("Jasmine", "Loving Life", 300, false);
    myLibrary.push(Book)
}

