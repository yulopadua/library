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
   let index = 0;

   myLibrary.forEach(myLib => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);

        //Remove book button
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-button");
        removeBookButton.textContent = "Remove From Library";

        //Link data attribute of the remove button to the array and card
        removeBookButton.dataset.linkedArray = index;
        card.appendChild(removeBookButton);

        //Event listener to remove array item
        removeBookButton.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(parseInt(retrieveBookToRemove), 1);
            card.remove();
            displayEachBook();
        }

        //Create read status button and add class attribute for each array card
        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("read-status-button");
        readStatusButton.textContent = "Toggle Read Status";

        //Link the data attribute of the toggle read button to the array and card
        readStatusButton.dataset.linkedArray = index;
        card.appendChild(readStatusButton);

        //Create event listener logic for array objects prototype for read status change
        readStatusButton.addEventListener("click", toogleReadStatus);

        function toogleReadStatus() {
            let retriveBookToToggle = readStatusButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            //Run check to see what read value is present to toggle form
            if (myLibrary[parseInt(retriveBookToToggle)].Read == "Yes") {
                toggleBook.Read = "No";
                myLibrary[parseInt(retriveBookToToggle)].Read =  toggleBook.Read;
            } else if (myLibrary[parseInt(retriveBookToToggle)].Read == "No") {
                toggleBook.Read =  "Yes";
                myLibrary[parseInt(retriveBookToToggle)].Read =  toggleBook.Read;
            }
            displayEachBook();
        }

        for (let key in myLib) {
            console.log(`${key}: ${myLib[key]}`)
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLib[key]}`);
            card.appendChild(para);
        }

    index++;
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