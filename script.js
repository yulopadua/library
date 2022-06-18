//declare empty array for library
let myLibrary = [];

//object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
};

//fucntion for adding a new book to the array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
};

//function to display library array to cards
function displayEachBook() {
   const books = document.querySelector(".books");

   myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`)
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
   })
};


addBookToLibrary("Hi", "hey", 98, "read");
addBookToLibrary("Hi", "hey", 98, "read");
addBookToLibrary("Hi", "hey", 98, "read");
addBookToLibrary("Hi", "hey", 98, "read");
addBookToLibrary("Hi", "hey", 98, "read");

displayEachBook();