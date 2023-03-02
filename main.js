let bookListContainer = document.querySelector('#bookList');

let bookList = [];
updateBooks();

function updateBooks () {
fetch('http://localhost:3000/books')
.then(res => res.json())
.then(data => {
   bookList = data
   createBookList(data)
})
}

function createBookList (books){
   bookListContainer.innerHTML = "";

   books.map(book => {
      let bookTitle = document.createElement("h2");
      bookTitle.innerHTML = book.name;

      bookListContainer.appendChild(bookTitle);
      bookBorrowedOrNot(book);
      
   });  
   addBookLink();    
}

function bookBorrowedOrNot (book){

   let borrowedOrNot = document.createElement("p");
   if(book.borrowed == true){
      borrowedOrNot.innerHTML = "Utlånad";

   } else{
      borrowedOrNot.innerHTML = "Tillgänglig";
      borrowBook(book);
   } 

   bookListContainer.appendChild(borrowedOrNot)
}

function borrowBook (book){
   let borrowBtn = document.createElement("button");
   borrowBtn.innerHTML = "Låna boken"
   borrowBtn.id = book.id;
   bookListContainer.appendChild(borrowBtn)
   borrowBtn.addEventListener("click", makeBookBorrowed);
   
}

function makeBookBorrowed(e){
   let id = e.currentTarget.id;

   fetch('http://localhost:3000/books/borrow', {
   method: "POST",
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify({bookId: id})
   
})
.then(data => {
   updateBooks();
})
}

function addBookLink (){
   let linkToAddBookPage = document.createElement('a')
   linkToAddBookPage.innerHTML = "Lägg till bok"
   bookListContainer.appendChild(linkToAddBookPage);
   linkToAddBookPage.href = "/addBook.html"
}