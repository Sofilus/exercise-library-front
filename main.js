let bookListContainer = document.querySelector('#bookList');

fetch('http://localhost:3000/books')
.then(res => res.json())
.then(data => {
   createBookList(data)
})

function createBookList (books){
   
   books.map(book => {

   let bookTitle = document.createElement("h2");
   console.log(bookTitle)
   bookTitle.innerHTML = book.name;
   let borrowedOrNot = document.createElement("p");
   borrowedOrNot.innerHTML = book.borrowed; 
   bookListContainer.appendChild(bookTitle);
   bookListContainer.appendChild(borrowedOrNot)
   })
}