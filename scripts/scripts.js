


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


const btn = document.querySelector('#new');

btn.addEventListener('click', () => {
    let myLibrary = [];
    readerPrompt()
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    console.log(myLibrary)
    
    for(i = 0; i < myLibrary.length; i++){
        const bookShelf = document.querySelector('#bookshelf')
        const logBook = document.createElement('p')
        logBook.classList.add('bookmark' + i)
        logBook.textContent = myLibrary[i].title + '\n' + myLibrary[i].author + '\n' + myLibrary[i].pages.toString() +'\n' + myLibrary[i].read.toString()
        bookshelf.appendChild(logBook)
        console.log(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read)

        const remove = document.querySelector('.bookmark' + i)
        const removeButton = document.createElement('button')
        removeButton.addEventListener('click', () => {
            bookshelf.removeChild(logBook)
            bookshelf.removeChild(removeButton)
        })
        removeButton.classList.add('remove' + i)
        removeButton.textContent = 'REMOVE'
        bookshelf.appendChild(removeButton)
    }

    
})



// const bookShelf = document.querySelector('#bookshelf')
// const logBook = document.createElement('p')
// logBook.classList.add('bookmark')
// logBook.textContent = myLibrary
// bookshelf.appendChild(logBook)