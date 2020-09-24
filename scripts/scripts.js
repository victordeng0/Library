
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.sayName = function() {
        console.log(title)
    }
}

function addBookToLibrary() {
    myLibrary.push(Book);
}



function readerPrompt() {
    title = prompt('What is the name of your Book?');
    author = prompt('Who is the author?');
    pages = prompt('How many pages are in your book?');
    read = prompt('Did you finish reading the book?');
    
}


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    readerPrompt()
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook.title, newBook.author, newBook.pages, newBook.read);
    console.log(myLibrary)

    const bookShelf = document.querySelector('#bookshelf')
    const logBook = document.createElement('p')
    logBook.classList.add('bookmark')
    logBook.textContent = myLibrary
    bookshelf.appendChild(logBook)
    
})


