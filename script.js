//declare empty array for library
let myLibrary = [];

//object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
};

//function for adding a new book to the array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayEachBook();
};

//function to display library array to cards
function displayEachBook() {
   const books = document.querySelector(".books");

   //Remove all previously displayed cards
   const removeDivs = document.querySelectorAll(".card");

   for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
   }

   //Loop over the library
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

//Event listener to display form
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
}

//Event listener to submit new entry
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    //Break out if form is incomplete
    if  ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return
    }

    //Call function to add book data to array
    addBookToLibrary(Title, Author, Pages, Read);

    //Reset the form after successful submission
    document.getElementById("add-book").reset();
}

//Event listener to clear form
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm)

function clearForm() {
    document.getElementById("add-book").reset();
}