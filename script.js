/*---------- Library Database ----------*/
let myLibrary = [];

function book(authorName, bookName, pageNum, didRead, iden){ // book constructor
    this.author = authorName;
    this.title = bookName;
    this.pages = pageNum;
    this.read = didRead;
    this.id = iden;
}

function addBook(){ // asks user for new book information and adds it to library.
    let authorName = prompt("Enter author name");
    let bookName = prompt("Enter book title");
    let pageNum = prompt("Enter total page numer");
    let didRead = prompt("Have you read the book? Enter Yes or No");
    let idNum = myLibrary.length;

    const Book = new book(authorName, bookName, pageNum, didRead, idNum);
    myLibrary.push(Book);
    update(Book);
}

function preadd(){ // just to add 2 books to array.
    let done = false;
    if(done == false){
        const Book = new book("David", "Star Fights", 300, "No", 0);
        myLibrary.push(Book);
        update(Book);
    }
    const Book = new book("Jasmine", "Loving Life", 300, "Yes", 1);
    myLibrary.push(Book)
    update(Book);
}

/*---------- Display Update (DOM)----------*/

const database = document.querySelector(".display");

function update(book){ // updates html via DOM
    const container = document.createElement("div");
    container.className = "info";
    const des = document.createElement("p");
    const br1 = document.createElement("BR");
    const br2 = document.createElement("BR");
    const br3 = document.createElement("BR");
    const br4 = document.createElement("BR");
    const btn = document.createElement("BUTTON");  ////////////////// button is created here
    btn.setAttribute("id", "btns");
    btn.setAttribute("value", book.id);
    const bNode = document.createTextNode("Remove Book");

    const node1 = document.createTextNode("Author Name: " + book.author);
    const node2 = document.createTextNode("Book Title: " + book.title);
    const node3 = document.createTextNode("Number of Pages: " + book.pages);
    const node4 = document.createTextNode("Read Status: " + book.read);
    des.append(node2, br1, node1, br2, node3, br3, node4, br4);

    btn.appendChild(bNode);
    container.append(des, btn);
    database.appendChild(container);

}



