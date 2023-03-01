let bookListContainer = document.querySelector('#bookList');

fetch('http://localhost:3000/books')
.then(res => res.json())
.then(data => {
   createBookList(data)
})

function createBookList (books){
   
   books.map(book => {
      let bookTitle = document.createElement("h2");
      bookTitle.innerHTML = book.name;

      let borrowBtn = document.createElement("button");
      borrowBtn.innerHTML = "Låna boken"

      bookListContainer.appendChild(bookTitle);
      bookBorrowedOrNot(book);
      

     
      })      
}

function bookBorrowedOrNot (book){

   let borrowedOrNot = document.createElement("p");
   if(book.borrowed == true){
      borrowedOrNot.innerHTML = "Utlånad";
      console.log(borrowedOrNot.innerHTML)
      
   } else{
      borrowedOrNot.innerHTML = "Tillgänglig";
      borrowBook(book);
   } bookListContainer.appendChild(borrowedOrNot)
}

function borrowBook (book){
   let borrowBtn = document.createElement("button");
   borrowBtn.innerHTML = "Låna boken"
   bookListContainer.appendChild(borrowBtn)
}