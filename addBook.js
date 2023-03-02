let addBookFormContainer = document.querySelector('#addBookForm');
let bookNameInput = document.createElement('input');
addBookPageHtml();

function addBookPageHtml(){
    let formTitle = document.createElement('h1');
    formTitle.innerHTML = "Lägg till bok";
    addBookFormContainer.appendChild(formTitle);

    
    bookNameInput.type = "text";
    bookNameInput.name = "bookName";
    addBookFormContainer.appendChild(bookNameInput);

    let addBookButton = document.createElement('button');
    addBookButton.type = "submit";
    addBookButton.innerHTML = "Lägg till bok";
    addBookFormContainer.appendChild(addBookButton)
    
    addBookButton.addEventListener('click', addBook)
}

function addBook () {
    
    let newBook = {name: bookNameInput.value };

    fetch('http://localhost:3000/books', {
   method: "POST",
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(newBook)
   
})
.then(data => {
   updateBooks(data);
})

}

