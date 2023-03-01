let bookListContainer = document.querySelector('#bookList');

function createBookList (){
   let bookTitle = document.createElement("h2");
   let borrowedOrNot = document.createElement("p");
   bookListContainer.appendChild(bookTitle);
   bookListContainer.appendChild(borrowedOrNot)  
}
createBookList();