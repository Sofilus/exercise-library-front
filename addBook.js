let addBookFormContainer = document.querySelector('#addBookForm');

addBookPageHtml();

function addBookPageHtml(){
    let formTitle = document.createElement('h1')
    let addBookForm = document.createElement('form');
    let bookNameInput = document.createElement('input');
    let addBookButton = document.createElement('button');
   
    formTitle.innerHTML = "Lägg till bok";
    addBookForm.innerHTML = "Bokens namn"
    addBookButton.innerHTML = "Lägg till bok" 
    addBookFormContainer.appendChild(formTitle);
    addBookFormContainer.appendChild(addBookForm);
    addBookForm.appendChild(bookNameInput)
    addBookForm.appendChild(addBookButton)
   
}